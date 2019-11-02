import React from 'react';
import hotAirBalloon from './daniela-cuevas-t7YycgAoVSw-unsplash.jpg';
function GetInspired(){
    return(
        <div className="get-inspired">
          <div id="get-inspired-photo">
            <a href="https://www.visitalbuquerque.org/balloon-fiesta/?gclid=CjwKCAjwk93rBRBLEiwAcMapUTHyrSldBiKqsrNhChcf4aOu0RR6DhAx2hE2SbggpNdBDGbHB3RArxoCU8QQAvD_BwE" target="_blank"><img src={hotAirBalloon} alt="hot air balloon photo"/></a>
          </div>
          <div id="get-inspired-info">
            <h2>Get Inspired</h2>
            <p>Hot Air Balloon Festival  |  New Mexico  |  2019</p>
            <p>The Albuquerque International Balloon Fiesta is a world-renowned attraction and destination for kids of all ages. </p>
            <button><a href="/adventures">explore</a></button>
          </div>
        </div>
    )
}

export default GetInspired;