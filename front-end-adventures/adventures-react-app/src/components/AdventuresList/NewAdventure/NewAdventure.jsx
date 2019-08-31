import React, {Component} from 'react';

class NewAdventure extends Component {
    constructor(){
        super();
        this.state = {
            what: '',
            where: '',
            when: '', 
            description: '',
            image: ''
        }
    }
    handleChange =(e) =>{
        this.setState({
            [e.currentTarget.name]:e.currentTarget.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addAdventure(this.state)
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="what" placeholder="what rad thing did you do?" onChange={this.handleChange}/>
                <input type="text" name="where" placeholder="where'd you go?" onChange={this.handleChange}/>
                <input type="text" name="when" placeholder="when did you go?" onChange={this.handleChange}/>
                <textarea type="text" name="description" placeholder="tell us about it" onChange={this.handleChange}></textarea>
                <img src='#' alt="will add soon" />
                <input type="submit"/>
            </form>
        )
    }
}
export default NewAdventure;