import React, { Component } from 'react';
import './App.css';
import Main from '../main/Main';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <header className='app-header'>
          <h1>Dahlia</h1>
        </header>

        <Main />

      </div>
    );
  }
}

export default App;
