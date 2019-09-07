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
        console.log(props)

    }
    
    render(){
        return(
            <div className="AdventureContainer">
                <h1>this is adventure component</h1>
                <NewAdventure addAdventure={this.props.addAdventure}/>
                <AdventureList adventures={this.props.adventures} updateAdventure={this.props.updateAdventure}/>

            </div>
        )
    }
}

export default AdventuresContainer;
