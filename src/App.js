import React, { Component } from 'react';
import './App.css';
import HomeMessage from "./components/HomeMessage"
import FeatureList from "./components/FeatureList"
import TopBar from "./components/TopBar"
import ScenarioManager from './components/ScenarioManager';
import  TrainBot from "./components/TrainBot";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouteras as Router, Switch } from 'react-router-dom';
import store from './store/store';
import Grid from '@material-ui/core/Grid';
import LoginPage from "./components/LoginPage";


function App() {
    return (
      <div className="App">
        <TopBar />
        <FeatureList />
          
  
      </div>
    );
  }
  
  export default App;
