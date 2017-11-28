import React, { Component } from 'react';
import { SideNav, SideNavItem } from 'react-materialize';
import { Link } from 'react-router-dom';

class SideNavCustom extends Component {

  render() {

    const imgLogo = {
      width: '200px'
    }

    const sideNavLogo = {
      height: '215px'
    }

    return (
        <SideNav id="sideNav" className="side-nav fixed" trigger={< div ></div>} >
          <div style={sideNavLogo}>
            <center>
              <img alt="" style={imgLogo} src="images/Dahlia.png" />
            </center>
          </div>
          <Link to="/">Home</Link>
          <SideNavItem divider />
          <Link to="/patients">Patients</Link>
          <SideNavItem divider />
          <Link to="/calendar">Calendar</Link>
          <SideNavItem divider />
          <Link to="/profile">Profile</Link>
        </SideNav >
    );
  }
}

export default SideNavCustom;