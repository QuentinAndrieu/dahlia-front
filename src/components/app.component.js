import React, { Component } from 'react';
import Root from '../containers/root.container';
import { SideNav, SideNavItem, Container } from 'react-materialize';
import '../index.css';
import { Link } from 'react-router-dom';

class App extends Component {

  componentDidMount() {
    if (sessionStorage.getItem('jwtToken') && !this.props.fetched) {
      this.props.fetchUser(sessionStorage.getItem('jwtToken'));
    }
  }

  render() {

    let main = {
      paddingLeft: '300px'
    }

    const imgLogo = {
      width: '200px'
    }

    const sideNavLogo = {
      height: '215px'
    }

    const header = {
      backgroundColor: '#FFCC00',
      height: '110px',
      color: 'white'
    }

    const menu = {
      cursor: 'pointer'
    }

    const link = {
      color: '#FF9900'
    }

    return (
      <div >
        <SideNav id="sideNav" className="side-nav fixed" trigger={< div ></div>} >
          <div style={sideNavLogo}>
            <center>
              <img alt="" style={imgLogo} src="images/Dahlia.png" />
            </center>
          </div>
          <Link style={link} to="/">Home</Link>
          <SideNavItem divider />
          <Link style={link} to="/patient/create">Add patient</Link>
          <Link style={link} to="/patients">List patients</Link>
          <SideNavItem divider />
          <Link style={link} to="/appointment/create">Add appointment</Link>
          <Link style={link} to="/appointments">List appointments</Link>
          <SideNavItem divider />
          <Link style={link} to="/calendar">Calendar</Link>
          <SideNavItem divider />
          <Link style={link} to="/profile">Profile</Link>
        </SideNav >

        <div style={main} className="main">
          <header style={header}>
            <a style={menu} data-activates="sideNav" className="button-collapse white-text hide-on-large-only">
              <i className="material-icons">menu</i>
            </a>
          </header>

          <Container >
            <Root />
          </Container>
        </div>
      </div >
    );
  }
}

export default App;