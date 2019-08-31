import React, {Component} from 'react';
import './App.css';
import AdventuresContainer from './components/AdventuresContainer/AdventuresContainer';
import AuthGateway from './components/AuthGateway/AuthGateway';

class App extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      username: null
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
  render(){
    return (
      <div className="App">
        {
          this.state.loggedIn ?
        <AdventuresContainer /> :
        <AuthGateway handleRegistration={this.handleRegistration}/> 
        }
      </div>
    );
  }
}

export default App;
