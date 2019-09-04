import React, {Component} from 'react';
import Register from '../AuthGateway/Register/Register';

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
                        <Register />
                    }
                        
                </div> 
            )
        }
    }

export default Navigation;