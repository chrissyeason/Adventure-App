import React from 'react';
import './App.css';
import AdventuresContainer from './components/AdventuresContainer/AdventuresContainer';
import Navigation from './components/Navigation/Navigation';


function App(){
  
    return (
      <div className="App">
        <Navigation />
        
        <AdventuresContainer /> 
         
        
      </div>
    );
}

export default App;
