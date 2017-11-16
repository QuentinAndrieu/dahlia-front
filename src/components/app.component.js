import React, { Component } from 'react';
import Root from '../containers/root.container';
import { SideNav, SideNavItem, Button, Navbar } from 'react-materialize';
// import logo from './images/Dahlia.jpg';

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

    const navBar = {
      backgroundColor: '#222'
    };

    let main = {
      paddingLeft: '300px',
      '@media screen and (max-width : 992px)': {
        paddingLeft: '0'
      }
    }

    const imgLogo = {
      width: '200px'
    }

    const sideNavLogo = {
      height: '215px'
    }

    return (
      <div className='app' style={app}>

        <SideNav className="side-nav fixed" trigger={<div></div>}>
          <div style={sideNavLogo}>
            <img style={imgLogo} src="images/Dahlia.jpg" />
          </div>
          <SideNavItem icon='person'>Profile</SideNavItem>
          <SideNavItem divider />
          <SideNavItem icon='add'>Add patient</SideNavItem>
          <SideNavItem icon='format_list_bulleted'>List patients</SideNavItem>
          <SideNavItem divider />
          <SideNavItem icon='add'>Add appointment</SideNavItem>
          <SideNavItem icon='format_list_bulleted'>List appointments</SideNavItem>
          <SideNavItem divider />
          <SideNavItem icon='perm_contact_calendar'>Calendar</SideNavItem>
        </SideNav>

        <Navbar style={navBar}>
        </Navbar>

        <div style={main}>
          <Root />
        </div>

      </div >
    );
  }
}

export default App;