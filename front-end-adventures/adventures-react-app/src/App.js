import React from 'react';
import './App.css';
import AdventuresContainer from './components/AdventuresContainer/AdventuresContainer';
import NewAdventure from './components/AdventuresContainer/NewAdventure/NewAdventure'
import Navigation from './components/Navigation/Navigation';
import { Route } from 'react-router-dom';

function App(){
  
    return (
      <div className="App">
        <Navigation />
  
        <Route path="/add" component={NewAdventure} /> 
        <Route path="/adventures" component={AdventuresContainer} />
      </div>
    );
}

export default App;
