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
                
                {/* <NewAdventure addAdventure={this.props.addAdventure}/> */}
                <AdventureList currentUser={this.props.username} adventures={this.props.adventures} updateAdventure={this.props.updateAdventure} deleteAdventure={this.props.deleteAdventure} loggedIn={this.props.loggedIn} username={this.props.username}/>

            </div>
        )
    }
}

export default AdventuresContainer;
