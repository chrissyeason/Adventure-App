import React from 'react';
import GetInspired from '../Get-Inspired/Get-Inspired';
import AdventureList from '../AdventuresContainer/AdventuresList/AdventureList';


function Home(props){
    return(
        <div>
            <img src="do-cool-shit-home-photo.jpg" alt="man on mountain" className="home-photo"/>

            <GetInspired />
            <AdventureList 
                adventures={props.adventures}
                username={props.username}
                deleteAdventure={props.deleteAdventure}/>

        </div>
    )
}

export default Home;