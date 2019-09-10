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
  componentDidMount(){
    this.updateNavState();
    console.log("componentDidMount updateNavState")
  }
  updateNavState = () =>{
    let isLoggedIn = this.props.loggedIn;
    if(isLoggedIn == true){
      this.setState({
        username:this.props.username,
        loggedIn: true
      })
    }  
  }
 
  
  // handleLogout = async (e) => {  
  //   const handleLogout = await fetch('http://localhost:9000/user/logout', {
  //     method: "GET",
  //     credentials: "include",
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  //   this.setState({
  //     loggedIn: false
  //   })
  // }      
    
        render(){
            return(
                <div className="nav-bar">
                    <h4><a href="/" id="nav-logo">DO COOL SHIT</a></h4>
                    <div className="discover-button">
                        <button><a href="/adventures" id="discover">discover</a></button>
                        
                    </div>
                    {
                    this.props.loggedIn ?
                        <button id="log-out" onClick={this.handleLogout}>log out</button> :
                        <AuthGateway handleRegistration={this.props.handleRegistration} handleLogin={this.props.handleLogin}/> 
                    }
                    
                    <NewAdventure addAdventure={this.props.addAdventure}/>
                </div> 
            )
        }
    }

export default Navigation;