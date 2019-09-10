import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import UpdateAdventure from './UpdateAdventure';

class AdventureShow extends Component{
    constructor(props){
        super(props);
        this.state ={
            modal:false
        }
        this.toggle = this.toggle.bind(this);
        // currentUser = this.props.username
    }

    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
    }

    render(){
      return(       
            <div className="show-adventure">
                <Button id="show-button" color="white" onClick={this.toggle}>{this.props.what}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader className="show-modal-header" toggle={this.toggle}>{this.props.what} {this.props.where}</ModalHeader>
                <ModalBody>
                    <h1>{this.props.what}</h1>
                    <div className="when-where-subhead">
                        <p>{this.props.where}</p>
                        <p> | </p>
                        <p>{this.props.when}</p>
                    </div>
                    
                    <p className="description">{this.props.description}</p>
                    <img src={this.props.image} className="modal-image"/>
                    <p>uploaded by: {this.props.username}</p>
                    <p>{this.props.currentUser}</p>
                    
                    {
                        this.props.currentUser === this.props.username ?
                            <button onClick={() => {this.props.deleteAdventure(this.props._id)}}>delete</button> :
                        ''
                    }
                    {
                        this.props.currentUser === this.props.username ?
                            <UpdateAdventure updateAdventure={this.props.updateAdventure}
                            what={this.props.what}
                            where={this.props.where}
                            when={this.props.when}
                            description={this.props.description}
                            id={this.props._id}
                            /> :
                            ''
                    }             
                </ModalBody>
                </Modal>
            </div>        
        )  
    }  
}

export default AdventureShow;