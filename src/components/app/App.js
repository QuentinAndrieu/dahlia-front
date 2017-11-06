import React, { Component } from 'react';
import './App.css';
import Router from '../router/Router';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <header className='app-header'>
          <h1>Dahlia</h1>
        </header>

        <Router />
      </div>
    );
  }
}

export default App;
