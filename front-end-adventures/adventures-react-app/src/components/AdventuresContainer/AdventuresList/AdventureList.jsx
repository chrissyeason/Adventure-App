import React from 'react';
import UpdateAdventure from './UpdateAdventure';

function AdventureList(props){
    const currentUser = props.username
    console.log("this is currentUser", currentUser)
    console.log("this is adventure list")
    const adventures = props.adventures.map(function(adventure){
        console.log("this is adventure.user.username", adventure.user.username)
        return(
            <li key={adventure._id}>

                    <h3>{adventure.what}</h3>
                    <p>{adventure.where}</p>
                    <p>{adventure.when}</p>
                    <p>{adventure.description}</p>
                    {/* <button onClick={() => {props.deleteAdventure(adventure._id)}}>delete</button> */}
                    {
                        currentUser !== null ?
                        <p>uploaded by: {adventure.user.username}</p> :
                        ''
                    }
                    <img src={adventure.image} alt={adventure.description}/>
                    {
                        currentUser == adventure.user.username ?
                            <button onClick={() => {props.deleteAdventure(adventure._id)}}>delete</button> :
                        ''
                    }
                    {
                        currentUser == adventure.user.username ?
                            <UpdateAdventure updateAdventure={props.updateAdventure}
                            what={adventure.what}
                            where={adventure.where}
                            when={adventure.when}
                            description={adventure.description}
                            id={adventure._id}
                            /> :
                            ''
                    }

                    
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