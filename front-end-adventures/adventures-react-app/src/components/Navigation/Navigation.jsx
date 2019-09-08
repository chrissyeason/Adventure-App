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
          renderNewAdventure: false,
          adventures: []
        }
      }
  handleLogout = async (e) =>{  
    const handleLogout = await fetch('http://localhost:9000/user/logout', {
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

  toggle =()=> {
    console.log("renderNewAdventure")
    this.setState(prevState => ({
      renderNewAdventure: !prevState.renderNewAdventure
    }));
  }
    
        render(){
            return(
                <div className="nav-bar">
                    <h4><a href="/">DO COOL SHIT</a></h4>
                    <div>
                        <button id="discover"><a href="/adventures">discover</a></button>
                        <button onClick={this.toggle}>add</button>
                        
                    </div>
                    {
                    this.props.loggedIn ?
                        <button id="log-out" onClick={this.handleLogout}>log out</button> :
                        <AuthGateway handleRegistration={this.props.handleRegistration} handleLogin={this.props.handleLogin}/> 
                    }
                    {
                      this.state.renderNewAdventure ?
                      <NewAdventure displayFromAddButtonClick={true} addAdventure={this.props.addAdventure}/> :
                      ''
                    }

                </div> 
            )
        }
    }

export default Navigation;