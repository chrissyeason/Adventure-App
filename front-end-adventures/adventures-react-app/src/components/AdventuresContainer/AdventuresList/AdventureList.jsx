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

                    {/* <h2 className="list-header">{adventure.what}</h2> */}
                    <AdventureShow 
                        what={adventure.what}
                        where={adventure.where}
                        description={adventure.description}
                        image={adventure.image}
                        username={adventure.user.username}
                        deleteAdventure={props.deleteAdventure}
                        _id={adventure._id}
                        currentUser={props.username}
                        updateAdventure={props.updateAdventure}
                        />
                    {/* <h5 className="list-where">{adventure.where}</h5> */}
                    {/* <h5>{adventure.when}</h5>
                    <p>{adventure.description}</p> */}
                    {/* {
                        currentUser !== null ?
                        <p>uploaded by: <br/>{adventure.user.username}</p> :
                        ''
                    } */}
                    {/* {
                        currentUser === adventure.user.username ?
                            <button onClick={() => {props.deleteAdventure(adventure._id)}}>delete</button> :
                        ''
                    } */}
                    {/* {
                        currentUser === adventure.user.username ?
                            <UpdateAdventure updateAdventure={props.updateAdventure}
                            what={adventure.what}
                            where={adventure.where}
                            when={adventure.when}
                            description={adventure.description}
                            id={adventure._id}
                            /> :
                            ''
                    }                     */}
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