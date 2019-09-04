import React from 'react';
import Register from './Register/Register';
import Login from './Login/Login';

function AuthGateway(){
    return(
        <div>
            <Register />
            <Login />
        </div>
    )
}

export default AuthGateway;