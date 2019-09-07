import React from 'react';
import Register from './Register/Register';
import Login from './Login/Login';
import '../Navigation/navigation.css'

function AuthGateway(props){
    return(
        <div className="register-nav">
            <Register handleRegistration={props.handleRegistration}/>
            <Login handleLogin={props.handleLogin}/>
        </div>
    )
}

export default AuthGateway;