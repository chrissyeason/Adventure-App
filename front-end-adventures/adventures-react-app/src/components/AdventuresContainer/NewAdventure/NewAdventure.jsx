import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './NewAdventure.css';

class NewAdventure extends Component {
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
        this.props.addAdventure(this.state)
        this.setState({
            modal: false
        })
    }
    
    componentDidMount(){
        console.log("component did mount")
        if(this.props.displayFromAddButtonClick){
            this.toggle()
        }
    }
    render(){
        return(
            <div className="new-adventure">
                <Button color="white" onClick={this.toggle}>add</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Add an adventure</ModalHeader>
                <ModalBody>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="what" placeholder="what rad shit did you do?" onChange={this.handleChange}/>
                        <input type="text" name="where" placeholder="where'd you go?" onChange={this.handleChange}/>
                        <input type="text" name="when" placeholder="when did you go?" onChange={this.handleChange}/>
                        <textarea type="text" name="description" placeholder="tell us about that shit!" onChange={this.handleChange}></textarea>
                        <input type="text" name="image" placeholder="image" onChange={this.handleChange}/>
                        <input type="submit" value="submit" onClick={this.toggle}/>
                    </form>
                </ModalBody>
                </Modal>
            </div>
        )
    }
}
export default NewAdventure;