import React, { Component } from 'react';
import Root from './Root';
import { fetchUser } from '../actions/UserActions';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    fetchUser: fetchUser
  }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(App);