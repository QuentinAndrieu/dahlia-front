import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem } from 'react-materialize';
import './App.css';
import Main from '../main/Main';
import PatientList from '../patient/PatientList';
import Router from '../router/Router';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navbar className='black' right>
          <NavItem ><Link to={`/`}>Home</Link></NavItem>
          <NavItem ><Link to={`/patients`}>Patients</Link></NavItem>
        </Navbar>
        
        <header className='app-header'>
          <h1>Dahlia</h1>
        </header>

        <Router />
      </div>
    );
  }
}

export default App;
