import React, {Component} from 'react';
import AuthGateway from '../AuthGateway/AuthGateway';
import {Link} from 'react-router-dom';
import { Route } from 'react-router-dom';
import NewAdventure from '../AdventuresContainer/NewAdventure/NewAdventure';
import AdventuresList from '../AdventuresContainer/AdventuresList/AdventureList';
import './navigation.css';
import AdventuresContainer from '../AdventuresContainer/AdventuresContainer';

class Navigation extends Component {
    constructor(props){
        super(props);
        this.state = {
          loggedIn: false,
          username: null,
          renderNewAdventure: false
        }
      }
logOut = async () =>{
    
    
      const logOut = await fetch('http://localhost:9000/user/logout', {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      })
        
    this.setState({
      loggedIn: false
      })
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
    console.log("registering");
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
      console.log('registration successful');
      this.setState({
        loggedIn: true,
        username: parsedResponse.data.username
      })
    }
}
toggle =()=> {
  this.setState(prevState => ({
    renderNewAdventure: !prevState.renderNewAdventure
  }));
}
    
        render(){
            return(
                <div className="nav-bar">
                    <h4>DO COOL SHIT</h4>
                    <div>
                        {/* <Route path="/adventures"  component={AdventuresContainer} /> */}
                        <button id="discover"><a href="/adventures">discover</a></button>
                        {/* <Route path="/add" component={NewAdventure} /> */}
                        <button onClick={this.toggle}>add</button>
                        
                    </div>
                    {
                    this.state.loggedIn ?
                        <button id="log-out" onClick={this.logOut}>log out</button> :
                        <AuthGateway handleRegistration={this.handleRegistration} handleLogin={this.handleLogin}/> 
                    }
                    {
                      this.state.renderNewAdventure ?
                      <NewAdventure displayFromAddButtonClick={true}/> :
                      ''
                    }
                </div> 
            )
        }
    }

export default Navigation;