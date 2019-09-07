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
    // add get route makes a fetch request
    render(){
        return(
            <div className="AdventureContainer">
                <h1>this is adventure component</h1>
                <NewAdventure/>
                <AdventureList adventures={this.state.adventures} />

            </div>
        )
    }
}

export default AdventuresContainer;
