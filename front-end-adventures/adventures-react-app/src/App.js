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
    this.state = {
      loggedIn: false,
      username: null,
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
  deleteAdventure = async (id) =>{
      console.log("this is id", id)
      try{
        const adventureDeleted = await fetch(`http://localhost:9000/adventures/${id}`,{
          method: 'DELETE',
          credentials: 'include',
        })
        const parsedResonse = await adventureDeleted.json();
        console.log(parsedResonse)
        if(parsedResonse.status.code === 200){
          console.log("made it to 200")
          this.setState({
            adventures: this.state.adventures.filter(function(adventure){
              return adventure._id !== id;
            })
          })
        }
      }catch(err){
        console.log(err)
      }
    }
  handleRegistration = async (formData) =>{
      console.log(formData);
      console.log("registering");
      const registerResponse = await fetch('http://localhost:9000/user/register', {
        method: 'POST',
        body: JSON.stringify(formData),
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      })
      const parsedResponse = await registerResponse.json();
      console.log(parsedResponse);
      if(parsedResponse.status.code === 201){
        console.log('registration successful');
        this.setState({
          loggedIn: true,
          username: parsedResponse.data.username
        })
      }
      
  }
  handleLogin = async (formData) =>{
    console.log(formData);
    console.log("logging in");
    const registerResponse = await fetch('http://localhost:9000/user/login', {
      method: 'POST',
      body: JSON.stringify(formData),
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const parsedResponse = await registerResponse.json();
    console.log(parsedResponse);
    if(parsedResponse.status.code === 200){
      console.log('login successful');
      this.setState({
        loggedIn: true,
        username: parsedResponse.data.username
      })
    }else{
      alert(parsedResponse.status.message);
    }    
  }
  
  handleLogout = async (e) => {  
    const handleLogout = await fetch('http://localhost:9000/user/logout', {
      method: "POST",
      credentials: 'include'
      })
      this.setState({
        loggedIn: false
      })
    }
    
       
  
  render(){
    return (
      <div className="App">
        <Navigation 
            handleLogout={this.handleLogout} 
            addAdventure={this.addAdventure} 
            adventures={this.state.adventures} 
            loggedIn={this.state.loggedIn} 
            username={this.state.username} 
            handleRegistration={this.handleRegistration} 
            handleLogin={this.handleLogin}/>
        <main>
          <Route exact path="/" render={(props) => 
            <Home {...props} 
              adventures={this.state.adventures} 
              username={this.state.username}
              deleteAdventure={this.deleteAdventure}
              /> }/>       
              
          <Route exact path="/adventures" 
            render={(props) => <AdventuresContainer 
              {...props} 
              currentUser={this.username} 
              adventures={this.state.adventures} 
              addAdventure={this.addAdventure} 
              updateAdventure={this.updateAdventure} 
              deleteAdventure={this.deleteAdventure} 
              loggedIn={this.state.loggedIn} 
              username={this.state.username}/>}
            />
        </main>
        <footer>
          <p>do cool shit was produced by <a href="http://www.chrissyeasondesigns.com" target="_blank">Chrissy Eason. </a>Hire her!</p>
        </footer>
      </div>
    );
}
}

export default App;
