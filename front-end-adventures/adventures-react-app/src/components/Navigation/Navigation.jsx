import React, {Component} from 'react';
import AuthGateway from '../AuthGateway/AuthGateway';

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
                <div>
                    <h3>DO COOL SHIT</h3>
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