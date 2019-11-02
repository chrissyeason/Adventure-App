import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './NewAdventure.css';

class NewAdventure extends Component {
    constructor(props){
        super(props);
        this.state = {
            room = '',
            modal: false
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

    handleChange =(e) =>{
        this.setState({
            [e.currentTarget.name]:e.currentTarget.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.props)
        console.log("handle submit")
        this.props.addRoom({room: this.state.room})
        this.setState({
            modal: false
        })
    }
    
    render(){
        return(
            <div className="new-adventure">
                <Button color="white" onClick={this.toggle}>add room</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Add Cool Shit</ModalHeader>
                <ModalBody>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="room" placeholder="room name" onChange={this.handleChange}/>
                        
                        <input type="submit" value="submit" onClick={this.toggle}/>
                    </form>
                </ModalBody>
                </Modal>
            </div>
        )
    }
}
export default NewAdventure;