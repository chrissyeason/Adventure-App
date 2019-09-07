import React, {Component} from 'react';
import NewAdventure from './NewAdventure/NewAdventure';
import AdventureList from './AdventuresList/AdventureList';
import '../AdventuresContainer/AdventuresContainer.css';
import { get } from 'http';

class AdventuresContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            adventures: []
        }
    }
    componentDidMount(){
        this.getAdventures();
        console.log("adventure container componentDidMount")
    }
    // add get route makes a fetch request
    getAdventures = async () => {
        try{
            const adventures = await fetch('http://localhost:9000/adventures');
            const parsedResonse = await adventures.json();
            if(parsedResonse.status.code === 200){
                console.log("this is parsedResponse", parsedResonse)
                this.setState({
                    adventures: parsedResonse.data
                })
            }
        }catch(err){
            console.log(err)
        }
    }
    // addAdventure function goes here
    
    render(){
        return(
            <div className="AdventureContainer">
                <h1>this is adventure component</h1>
                <NewAdventure addAdventure={this.props.addAdventure}/>
                <AdventureList adventures={this.state.adventures} />

            </div>
        )
    }
}

export default AdventuresContainer;
