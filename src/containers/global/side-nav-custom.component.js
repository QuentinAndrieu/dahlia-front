import React, { Component } from 'react';
import { SideNav, SideNavItem } from 'react-materialize';
import { Link } from 'react-router-dom';

class SideNavCustom extends Component {

  constructor(props){
    super(props);

    this.logOut = this.logOut.bind(this);
  }

  isAdmin() {
    return this.props.admin;
  }

  logOut() {
    this.props.setJWTToken(null);
    sessionStorage.setItem('jwtToken', null);
  }

  render() {
    const imgLogo = {
      width: '200px'
    }

    const sideNavLogo = {
      height: '250px'
    }

    let linkAdmin;

    if (this.isAdmin()) {
      linkAdmin = <div>
        <SideNavItem divider />
        <Link className="link-admin" to="/admin/users">Admin</Link>
      </div>;
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
        {linkAdmin}
        <SideNavItem divider />
        <Link to="/signin" onClick={this.logOut}>Log out</Link>
      </SideNav >
    );
  }
}

export default SideNavCustom;