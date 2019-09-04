import React from 'react';
import Register from './Register/Register';
import Login from './Login/Login';
import '../Navigation/navigation.css'

function AuthGateway(){
    return(
        <div className="register-nav">
            <Register />
            <Login />
        </div>
    )
}

export default AuthGateway;