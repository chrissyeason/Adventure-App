import React from 'react';

function AdventureList(props){
    const adventures = props.adventures.map(function(adventure){
        return(
            <li key={adventure._id}>
                    <h3>{adventure.what}</h3>
                    <p>{adventure.where}</p>
                    <p>{adventure.when}</p>
                    <p>{adventure.description}</p>
                    <p>uploaded by: {adventure.user.username}</p>
                    <img src={adventure.image} alt={adventure.description}/>
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