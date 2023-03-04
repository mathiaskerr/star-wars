import './App.css';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import MainContainer from './containers/MainContainer';
import Starships from './components/Starships';
import NavBar from './components/NavBar';



const App=() => {


  return (
    <div>
      <h1>Star Wars</h1>
        <MainContainer/>

  
    </div>
  );
}

export default App;
