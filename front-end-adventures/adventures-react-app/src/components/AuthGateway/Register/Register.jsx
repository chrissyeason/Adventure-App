import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Register.css';

class Register extends Component {
    constructor(){
        super();
        this.state = {
            username: null,
            password: null,
            modal: false
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
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
        this.handleRegistration(this.state)
    }
    handleRegistration = async (formData) =>{
        console.log(formData);
        console.log("registering");
        const registerResponse = await fetch('http://localhost:9000/user/register', {
          method: 'POST',
          body: JSON.stringify(formData),
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          }
        })
        const parsedResponse = await registerResponse.json();
        console.log(parsedResponse);
        if(parsedResponse.status.code === 201){
          console.log('registration successful');
          this.setState({
            loggedIn: true,
            username: parsedResponse.data.username
          })
        }
    }
    
    render(){
        return(
            <div className="Register">
        <Button color="white" onClick={this.toggle}>register</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Register</ModalHeader>
          <ModalBody>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="username" placeholder="username" onChange={this.handleChange}/>
                <input type="password" name="password" placeholder="password" onChange={this.handleChange}/>
                <input type="submit" value="submit" onClick={this.toggle}/>
            </form>
          </ModalBody>
          
        </Modal>
      </div>
        )
    }
}
export default Register;