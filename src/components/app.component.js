import React, { Component } from 'react';
import Root from '../containers/root.container';

class App extends Component {

  componentDidMount() {
    if (sessionStorage.getItem('jwtToken')) {
      this.props.fetchUser(sessionStorage.getItem('jwtToken'));
    }
  }

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

        <Root />

      </div>
    );
  }
}

export default App;