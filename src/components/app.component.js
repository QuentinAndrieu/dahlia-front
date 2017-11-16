import React, { Component } from 'react';
import Root from '../containers/root.container';
import { SideNav, SideNavItem, Navbar } from 'react-materialize';
import '../index.css';

class App extends Component {

  componentDidMount() {
    if (sessionStorage.getItem('jwtToken')) {
      this.props.fetchUser(sessionStorage.getItem('jwtToken'));
    }
  }

  render() {

    const navBar = {
      backgroundColor: '#222',
      height: '110px'
    };

    let main = {
      paddingLeft: '300px'
    }

    const imgLogo = {
      width: '200px'
    }

    const sideNavLogo = {
      height: '215px'
    }

    return (
      <div className="app">

        <SideNav id="sideNav" className="side-nav fixed" trigger={<div></div>}>
          <div style={sideNavLogo}>
            <img alt="" style={imgLogo} src="images/Dahlia.jpg" />
          </div>
          <SideNavItem href="/profile" icon="person">Profile</SideNavItem>
          <SideNavItem divider />
          <SideNavItem href="/patient/create" icon="add">Add patient</SideNavItem>
          <SideNavItem href="/patients" icon="format_list_bulleted">List patients</SideNavItem>
          <SideNavItem divider />
          <SideNavItem href="/appointment/create" icon="add">Add appointment</SideNavItem>
          <SideNavItem href="/appointments" icon="format_list_bulleted">List appointments</SideNavItem>
          <SideNavItem divider />
          <SideNavItem href="/calendar" icon="perm_contact_calendar">Calendar</SideNavItem>
        </SideNav>

        <Navbar style={navBar}>
        </Navbar>

        <div style={main} className="main">
          <Root />
        </div>

      </div >
    );
  }
}

export default App;