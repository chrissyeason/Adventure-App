import React from 'react';
import GetInspired from '../Get-Inspired/Get-Inspired';
import AdventureList from '../AdventuresContainer/AdventuresList/AdventureList';


function Home(props){
    return(
        <div>
            <img src="adventure-background.jpg" alt="man on mountain" className="home-photo"/>
            <h1>this is home</h1>

            <GetInspired />
            <AdventureList adventures={props.adventures}/>

        </div>
    )
}

export default Home;