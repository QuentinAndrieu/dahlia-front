import React, { Component } from 'react';
import { SideNav, SideNavItem } from 'react-materialize';
import { Link } from 'react-router-dom';

class SideNavCustom extends Component {

  constructor(props) {
    super(props);

    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    this.props.setJWTToken(null);
    sessionStorage.setItem('jwtToken', null);
  }

  render() {
    return (
      <SideNav id="sideNav" className="side-nav fixed" trigger={< div ></div>} >
        <div className="side-nav-img-logo">
          <center>
            <img alt="" className="side-nav-logo" src="images/Dahlia.png" />
          </center>
        </div>
        <Link to="/">Home</Link>
        <SideNavItem divider />
        <Link to="/patients">Patients</Link>
        <SideNavItem divider />
        <Link to="/calendar">Calendar</Link>
        <SideNavItem divider />
        <Link to="/profile">Profile</Link>
        <SideNavItem divider />
        <Link to="/signin" onClick={this.logOut}>Log out</Link>
      </SideNav >
    );
  }
}

export default SideNavCustom;