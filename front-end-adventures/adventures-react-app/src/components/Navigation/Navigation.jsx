import React, {Component} from 'react';
import AuthGateway from '../AuthGateway/AuthGateway';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NewAdventure from '../AdventuresContainer/NewAdventure/NewAdventure';
import './navigation.css';
import logo from './do-cool-shit-logo.png';
import AdventuresContainer from '../AdventuresContainer/AdventuresContainer';
import Home from '../Home/Home';
import Chat from '../Chat/Chat';

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
                
                    <div>
                        <nav className="nav-bar">
                            <Link to="/" id="nav-logo"><img src={logo} id="logo"/></Link>
                            
                            <div className="discover-button">
                                <button><Link to="/adventures"  id="discover">discover</Link></button>
                                
                            </div>
                            {
                            this.props.loggedIn ?
                                <button id="log-out" onClick={this.startLogOut}>log out</button> :
                                <AuthGateway 
                                    handleRegistration={this.props.handleRegistration} 
                                    handleLogin={this.props.handleLogin}/> 
                            }
                            {
                                this.props.loggedIn ?
                                    <NewAdventure className="Modal" 
                                        addAdventure={this.props.addAdventure}
                                        username={this.props.username}
                                        updateAdventure={this.props.updateAdventure}
                                        deleteAdventure={this.props.deleteAdventure}/> :
                                    ''    
                            }

                            {
                                this.props.loggedIn ?
                                <button><Link to="/chat">
                                    <Chat 
                                        username={this.props.username}
                                        loggedIn={this.props.loggedIn}/>chat</Link></button> :
                                        ''
                                        
                            }
                            
                        </nav> 
                        <div>
                            {/* <Route 
                                exact path="/" 
                                component={Home} /> */}
                            <Route 
                                exact path="/adventures" 
                                render={(props) => <AdventuresContainer 
                                    {...props} 
                                    currentUser={this.props.username} 
                                    adventures={this.props.adventures} 
                                    addAdventure={this.props.addAdventure} 
                                    updateAdventure={this.props.updateAdventure} 
                                    deleteAdventure={this.props.deleteAdventure} 
                                    loggedIn={this.props.loggedIn} 
                                    username={this.props.username}/>}
                                    />
                            <Route 
                                exact path="/chat" 
                                component={Chat}/>
                        </div>
                    </div>
                
            )
        }
    }

export default Navigation;