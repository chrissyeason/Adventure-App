import React from 'react';
import './App.css';
import AdventuresContainer from './components/AdventuresContainer/AdventuresContainer';
import NewAdventure from './components/AdventuresContainer/NewAdventure/NewAdventure';
import AdventureList from './components/AdventuresContainer/AdventuresList/AdventureList';
import Navigation from './components/Navigation/Navigation';
import { Route } from 'react-router-dom';
import GetInspired from './components/Get-Inspired/Get-Inspired';

function App(){
  
    return (
      <div className="App">
        <Navigation />
        <img src="adventure-background.jpg" alt="man on mountain" className="home-photo"/>
        
        <GetInspired />
        <Route path="/add" component={NewAdventure} /> 
        <Route path="/adventures" component={AdventuresContainer} />
      </div>
    );
}

export default App;
