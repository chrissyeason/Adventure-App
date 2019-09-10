import React from 'react';
import UpdateAdventure from './UpdateAdventure';
import './AdventureList.css';
import AdventureShow from './Adventure-show';

function AdventureList(props){
    const currentUser = props.username
    console.log("this is currentUser", currentUser)
    console.log("this is adventure list")
    const adventures = props.adventures.map(function(adventure){
        console.log("this is adventure.user.username", adventure.user.username)
        return(
        
            <li key={adventure._id}>
                    <img src={adventure.image} alt={adventure.description} className="adventure-list-images"/>

                    <AdventureShow 
                        what={adventure.what}
                        where={adventure.where}
                        when={adventure.when}
                        description={adventure.description}
                        image={adventure.image}
                        username={adventure.user.username}
                        deleteAdventure={props.deleteAdventure}
                        _id={adventure._id}
                        currentUser={props.username}
                        updateAdventure={props.updateAdventure}
                        />
    
            </li>
            
        )
    })
    return(
        
            <ul className="list-container">
              {adventures}
            </ul>
       
    )
}

export default AdventureList;