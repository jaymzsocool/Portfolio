import React, { Component } from 'react';
import logo from './logo.svg';
import PersonalInfo from './components/PersonalInfo'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PersonalInfo />
      </div>
    );
  }
}

export default App;
