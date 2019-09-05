import React, {Component} from 'react';
import NewAdventure from './NewAdventure/NewAdventure';
import AdventureList from './AdventuresList/AdventureList';
import '../AdventuresContainer/AdventuresContainer.css';

class AdventuresContainer extends Component {
    constructor(){
        super();
        this.state = {
            adventures: []
        }
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
    render(){
        return(
            <div className="AdventureContainer">
                <h1>this is adventure component</h1>
                <NewAdventure addAdventure={this.addAdventure}/>
                <AdventureList adventures={this.state.adventures}/>
            </div>
        )
    }
}

export default AdventuresContainer;
