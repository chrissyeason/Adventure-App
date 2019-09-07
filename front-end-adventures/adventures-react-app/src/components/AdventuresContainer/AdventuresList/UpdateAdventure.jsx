import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class UpdateAdventure extends Component {
    constructor(props){
        super(props);
        this.state = {
            what: '',
            where: '',
            when: '', 
            description: '',
            image: '',
            modal: false
        }
    }
    toggle = ()=>{
        this.setState(prevState => ({
            modal: !prevState.modal
          }));
    }
    // componentDidMount(){
    //     this.toggle();
    // }
    handleChange=(e)=>{
        this.setState({
            [e.currentTarget.name]:e.currentTarget.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.updateAdventure(this.props.id, this.state)
        console.log(this.props.id)
    }
    render(){
        return(
            <div className="update-adventure">
                <Button id="updateButton" color="white" onClick={this.toggle}>update</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Update your adventure</ModalHeader>
                <ModalBody>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="what" placeholder="what rad thing did you do?" onChange={this.handleChange}/>
                        <input type="text" name="where" placeholder="where'd you go?" onChange={this.handleChange}/>
                        <input type="text" name="when" placeholder="when did you go?" onChange={this.handleChange}/>
                        <textarea type="text" name="description" placeholder="tell us about it" onChange={this.handleChange}></textarea>
                        <input type="text" name="image" placeholder="image" onChange={this.handleChange}/>
                        <input type="submit" value="submit" onClick={this.toggle}/>
                    </form>
                </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default UpdateAdventure;