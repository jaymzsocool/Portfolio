import React, { Component } from 'react';
import PersonalInfo from './components/PersonalInfo'
import ProjectDisplay from './components/ProjectDisplay'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PersonalInfo />
        <ProjectDisplay />
      </div>
    );
  }
}

export default App;
