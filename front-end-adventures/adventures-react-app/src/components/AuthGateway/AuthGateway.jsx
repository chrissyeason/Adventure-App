import React, {Component} from 'react';
import Register from './Register/Register'

class AuthGateway extends Component {
    constructor(){
        super();
    }    
        render(){
            return(
                <div>
                    <h1>register as a new user</h1>
                    <Register handleRegistration={this.props.handleRegistration}/>
                    
                </div>
            )
        }
    }

export default AuthGateway;