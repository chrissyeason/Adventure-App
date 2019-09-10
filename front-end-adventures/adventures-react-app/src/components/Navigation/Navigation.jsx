import React, {Component} from 'react';
import { Button } from 'reactstrap';
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
          renderNewAdventure: false,
          adventures: []
        }
      }
  
 startLogOut = () => {
  this.setState({
    loggedIn: false
  })
  this.props.handleLogout(this.state)
 }
  
   
    
        render(){
            return(
                <div className="nav-bar">
                    <a href="/" id="nav-logo"><img src="do-cool-shit-logo.png" id="logo"/></a>

                    <div className="discover-button">
                        <button><a href="/adventures" id="discover">discover</a></button>
                        
                    </div>
                    {
                    this.props.loggedIn ?
                        <button id="log-out" onClick={this.startLogOut}>log out</button> :
                        <AuthGateway 
                            handleRegistration={this.props.handleRegistration} 
                            handleLogin={this.props.handleLogin}/> 
                    }
                    
                    <NewAdventure className="Modal" 
                        addAdventure={this.props.addAdventure}
                        username={this.props.username}/>
                </div> 
            )
        }
    }

export default Navigation;