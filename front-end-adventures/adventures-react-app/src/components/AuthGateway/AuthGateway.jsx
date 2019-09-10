import React from 'react';
import Register from './Register/Register';
import Login from './Login/Login';
import '../Navigation/navigation.css'

function AuthGateway(props){
    return(
        <div className="register-nav">
            <Register handleRegistration={props.handleRegistration} className="Modal"/>
            <Login handleLogin={props.handleLogin} className="Modal"/>
        </div>
    )
}

export default AuthGateway;