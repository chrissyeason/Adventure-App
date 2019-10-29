import React from 'react';
import UpdateAdventure from './UpdateAdventure';
import './AdventureList.css';
import AdventureShow from './Adventure-show';

function AdventureList(props){
    const currentUser = props.user
    console.log("this is currentUser", currentUser)
    console.log("this is adventure list")
    const adventures = props.adventures.map(function(adventure){
        // console.log("this is adventure.user.user", adventure.user.user)
        return(
        
            <li key={adventure._id}>
                    {/* <img src={adventure.image} alt={adventure.description} className="adventure-list-images"/> */}

                     <AdventureShow 
                        what={adventure.what}
                        where={adventure.where}
                        when={adventure.when}
                        description={adventure.description}
                        image={adventure.image}
                        user={adventure.user}
                        deleteAdventure={props.deleteAdventure}
                        _id={adventure._id}
                        currentUser={props.user}
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