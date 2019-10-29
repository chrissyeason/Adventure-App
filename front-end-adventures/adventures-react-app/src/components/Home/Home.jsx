import React from 'react';
import GetInspired from '../Get-Inspired/Get-Inspired';
import AdventureList from '../AdventuresContainer/AdventuresList/AdventureList';
import homePhoto from './do-cool-shit-home-photo.jpg';

function Home(props){
    return(
        <div>
            <img src={homePhoto} alt="man on mountain" className="home-photo"/>

            <GetInspired />
            <AdventureList 
                adventures={props.adventures}
                user={props.user}
                deleteAdventure={props.deleteAdventure}
                updateAdventure={props.updateAdventure}
                />

        </div>
    )
}

export default Home;