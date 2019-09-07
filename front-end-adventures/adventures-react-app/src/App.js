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
  componentDidMount(){
      this.getAdventures();
      console.log("adventure container componentDidMount")
  }
// get route makes a fetch request
  getAdventures = async () => {
      try{
          const adventures = await fetch('http://localhost:9000/adventures');
          const parsedResonse = await adventures.json();
          if(parsedResonse.status.code === 200){
              console.log("this is parsedResponse", parsedResonse)
              this.setState({
                  adventures: parsedResonse.data
              })
              console.log(parsedResonse.data)
          }
      }catch(err){
          console.log(err)
      }
  }
  // post route makes a fetch request and adds new adventure
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
  // update route makes a fetch request and updates adventure by id
  updateAdventure = async (id, formData) => {
      const adventureUpdated = await fetch(`http://localhost:9000/adventures/${id}`,{
        method: 'PUT',
        body: JSON.stringify(formData),
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      })
      const parsedResponse = await adventureUpdated.json();
      this.setState({
        adventures: this.state.adventures.map((adventure)=>{
          if(id === adventure._id){
            return parsedResponse.data
          }else{
            return adventure
          }
        })
      })
    }

  render(){
    return (
      <div className="App">
        <Navigation addAdventure={this.addAdventure} adventures={this.state.adventures}/>
        <main>
          <Route exact path="/" component={Home} />        
          <Route exact path="/adventures" 
            render={(props) => <AdventuresContainer {...props} adventures={this.state.adventures} addAdventure={this.addAdventure} updateAdventure={this.updateAdventure}/>}
            />
        </main>
      </div>
    );
}
}

export default App;
