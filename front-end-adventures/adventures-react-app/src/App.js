import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import AdventuresContainer from './components/AdventuresContainer/AdventuresContainer';
import AdventureList from './components/AdventuresContainer/AdventuresList/AdventureList';
import NewAdventure from './components/AdventuresContainer/NewAdventure/NewAdventure';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';

class App extends Component {
  constructor(){
    super();
    this.state={
      adventures: []
    }
  }
  addAdventure = async (formData) =>{
    console.log("adding adventure");
    try{
        const newAdventure = await fetch('http://localhost:9000/adventures',{
            method: 'POST',
            body: JSON.stringify(formData),
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const parsedResponse = await newAdventure.json();
        console.log(parsedResponse);
        if(parsedResponse.status.code === 200){
            this.setState({
                adventures: [...this.state.adventures, parsedResponse.data]
            })
        }
    }catch(err){
        console.log(err)
    }
  }
  render(){
    return (
      <div className="App">
        <Navigation addAdventure={this.addAdventure}/>
        <main>
          <Route exact path="/" component={Home} />        
          <Route exact path="/adventures" 
            render={(props) => <AdventuresContainer {...props} adventures={this.state.adventures} addAdventure={this.addAdventure}/>}
            />
        </main>
      </div>
    );
}
}

export default App;
