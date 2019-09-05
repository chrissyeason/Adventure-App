import React from 'react';
import './App.css';
import AdventuresContainer from './components/AdventuresContainer/AdventuresContainer';
import NewAdventure from './components/AdventuresContainer/NewAdventure/NewAdventure';
import AdventureList from './components/AdventuresContainer/AdventuresList/AdventureList';
import Navigation from './components/Navigation/Navigation';
import { Route } from 'react-router-dom';

function App(){
  
    return (
      <div className="App">
        <Navigation />
        <img src="adventure-background.jpg" className="home-photo"/>
        
        <div className="get-inspired">
          <div>
            <img src="daniela-cuevas-t7YycgAoVSw-unsplash.jpg"/>
          </div>
          <div>
            <h2>Get Inspired</h2>
            <p>Hot Air Balloon Festival  |  New Mexico  |  2019</p>
            <p>The Albuquerque International Balloon Fiesta is a world-renowned attraction and destination for kids of all ages. </p>
            <button><a href="/adventuresList">explore</a></button>
          </div>
        </div>
        <Route path="/add" component={NewAdventure} /> 
        <Route path="/adventures" component={AdventuresContainer} />
        <Route path="/adventuresList" component={AdventureList} />
      </div>
    );
}

export default App;
