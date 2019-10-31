import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import './Login.css';
// import '../Register/Register.css';

class Login extends Component {
    constructor(props){
        super(props);
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
        this.props.handleLogin({
            username: this.state.username,
            password: this.state.password,
        });
    }
    
    
    render(){
        return(
            <div className="Login">
                <Button color="white" onClick={this.toggle}>login</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Login</ModalHeader>
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
export default Login;