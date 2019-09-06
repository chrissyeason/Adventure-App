import React, {Component} from 'react';
import AuthGateway from '../AuthGateway/AuthGateway';
import './navigation.css';

class Navigation extends Component {
    constructor(){
        super();
        this.state = {
          loggedIn: false,
          username: null
        }
      }
logOut = () =>{
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
    if(parsedResponse.status.code === 201){
      console.log('registration successful');
      this.setState({
        loggedIn: true,
        username: parsedResponse.data.username
      })
    }
}
    
        render(){
            return(
                <div className="nav-bar">
                    <h4>DO COOL SHIT</h4>
                    <div className="discover-add-btn">
                        <button><a href="/adventures">discover</a></button>
                        <button><a href="/add">add</a></button>
                    </div>
                    {
                    this.state.loggedIn ?
                        <button id="log-out" onClick={this.logOut}>log out</button> :
                        <AuthGateway handleRegistration={this.handleRegistration} handleLogin={this.handleLogin}/> 
                    }
                        
                </div> 
            )
        }
    }

export default Navigation;