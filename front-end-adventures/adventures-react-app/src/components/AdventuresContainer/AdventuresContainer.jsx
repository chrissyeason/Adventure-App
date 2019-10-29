import React, {Component} from 'react';
import AdventureList from './AdventuresList/AdventureList';
import '../AdventuresContainer/AdventuresContainer.css';


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
                
                
                <AdventureList 
                    currentUser={this.props.user}   
                    adventures={this.props.adventures} 
                    updateAdventure={this.props.updateAdventure} 
                    deleteAdventure={this.props.deleteAdventure} 
                    loggedIn={this.props.loggedIn} 
                    user={this.props.user}/>

            </div>
        )
    }
}

export default AdventuresContainer;
