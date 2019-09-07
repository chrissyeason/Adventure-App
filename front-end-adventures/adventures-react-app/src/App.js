import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import AdventuresContainer from './components/AdventuresContainer/AdventuresContainer';
import AdventureList from './components/AdventuresContainer/AdventuresList/AdventureList';
import NewAdventure from './components/AdventuresContainer/NewAdventure/NewAdventure';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
let showModal = true;

const toggle = () =>{
  console.log("modal is active")
  if(!showModal){
    return true;
  }else{
    return false;
  }
  App();
}
function App(){
    return (
      <div className="App">
        <Navigation toggle={toggle}/>
        <main>
          <Route exact path="/" component={Home} />        
          <Route exact path="/adventures" component={AdventuresContainer} />
          <Route path="/add"  render={(props)=><NewAdventure {...props} showModal ={()=>toggle()}/>} />
        </main>
      </div>
    );
}

export default App;
