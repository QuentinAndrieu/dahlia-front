import React, { Component } from 'react';
import Root from '../containers/root.container';
import { SideNav, SideNavItem, Container, Icon } from 'react-materialize';
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
      backgroundColor: 'grey',
      height: '110px',
      color: 'white'
    }

    const menu = {
      cursor: 'pointer'
    }

    return (
      <div className="app" >
        <SideNav id="sideNav" className="side-nav fixed" trigger={< div ></div>} >
          <div style={sideNavLogo}>
            <center>
              <img alt="" style={imgLogo} src="images/Dahlia.jpg" />
            </center>
          </div>
          <Link to="/">Home</Link>
          <SideNavItem divider />
          <Link to="/profile">Profile</Link>
          <SideNavItem divider />
          <Link to="/patient/create">Add patient</Link>
          <Link to="/patients">Add patient</Link>
          <SideNavItem divider />
          <Link to="/appointment/create">Add appointment</Link>
          <Link to="/appointments">Add appointment</Link>
          <SideNavItem divider />
          <Link to="/calendar">Calendar</Link>
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