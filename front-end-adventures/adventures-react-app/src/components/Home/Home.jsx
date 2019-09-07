import React from 'react';
import GetInspired from '../Get-Inspired/Get-Inspired';


function Home(){
    return(
        <div>
            <img src="adventure-background.jpg" alt="man on mountain" className="home-photo"/>
            <h1>this is home</h1>

            <GetInspired />

        </div>
    )
}

export default Home;