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
    
        render(){
            return(
                <div className="nav-bar">
                    <h4>DO COOL SHIT</h4>
                    <div className="discover-add-btn">
                        <p>discover</p>
                        <p>add</p>
                    </div>
                    {
                    this.state.loggedIn ?
                        <button onClick={this.logOut}>log out</button> :
                        <AuthGateway /> 
                    }
                        
                </div> 
            )
        }
    }

export default Navigation;