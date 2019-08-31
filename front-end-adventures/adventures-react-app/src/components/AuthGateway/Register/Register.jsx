import React, {Component} from 'react';

class Register extends Component {
    constructor(){
        super();
        this.state = {
            username: null,
            password: null
        }
    }
    handleChange = (e) =>{
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        // register function coming in from parent
        console.log('submitted the form')
        this.props.handleRegistration(this.state)
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="username" placeholder="username" onChange={this.handleChange} />
                <input type="password" name="password" placeholder="password" onChange={this.handleChange} />
                <input type="submit" value="register" />
            </form>
        )
    }
}
export default Register;