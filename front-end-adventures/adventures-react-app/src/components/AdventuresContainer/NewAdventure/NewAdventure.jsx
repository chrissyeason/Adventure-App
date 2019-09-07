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
        this.addAdventure(this.state)
        this.setState({
            modal: false
        })
    }
    addAdventure = async (formData) =>{
        console.log("adding adventure");
        try{
            const newAdventure = await fetch('http://localhost:9000/adventures',{
                method: 'POST',
                body: JSON.stringify(formData),
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const parsedResponse = await newAdventure.json();
            console.log(parsedResponse);
            if(parsedResponse.status.code === 200){
                this.setState({
                    adventures: [...this.state.adventures, parsedResponse.data]
                })
            }
        }catch(err){
            console.log(err)
        }
    }
    componentDidMount(){
        if(this.props.displayFromAddButtonClick){
            this.toggle()
        }
    }
    render(){
        return(
            <div className="new-adventure">
                <Button id="addButton" color="white" onClick={this.toggle}></Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Add your adventure</ModalHeader>
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
export default NewAdventure;