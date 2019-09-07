import React from 'react';
import UpdateAdventure from './UpdateAdventure';

function AdventureList(props){
    console.log("this is adventure list")
    const adventures = props.adventures.map(function(adventure){
        return(
            <li key={adventure._id}>
                
                    <h3>{adventure.what}</h3>
                    <p>{adventure.where}</p>
                    <p>{adventure.when}</p>
                    <p>{adventure.description}</p>
                    {/* <p>uploaded by: {adventure.user.username}</p> */}
                    <img src={adventure.image} alt={adventure.description}/>
                    <UpdateAdventure updateAdventure={props.updateAdventure}
                        what={adventure.what}
                        where={adventure.where}
                        when={adventure.when}
                        description={adventure.description}
                        id={adventure._id}
                        />
            </li>
        )
    })
    return(
        <ul>
           {adventures}
        </ul>
    )
}

export default AdventureList;