import React, { Component } from 'react';
import Router from './Router';

class App extends Component {
  render() {

    const app = {
      textAlign: 'center'
    };
    
    const header = {
      backgroundColor: '#222',
      height: '200px',
      padding: '20px',
      color: 'white'
    };


    return (
      <div className='app' style={app}>
        <header className='app-header' style={header}>
          <h1>Dahlia</h1>
        </header>

        <Router />
      </div>
    );
  }
}

export default App;
