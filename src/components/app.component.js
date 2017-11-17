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
      color: 'white',
      paddingTop: '15px'
    }

    const menu = {
      cursor: 'pointer'
    }

    const title = {
      marginTop: '0px'
    }

    return (
      <div >
        <SideNav id="sideNav" className="side-nav fixed" trigger={< div ></div>} >
          <div style={sideNavLogo}>
            <center>
              <img alt="" style={imgLogo} src="images/Dahlia.png" />
            </center>
          </div>
          <Link to="/">Home</Link>
          <SideNavItem divider />
          <Link to="/patient/create">Add patient</Link>
          <Link to="/patients">List patients</Link>
          <SideNavItem divider />
          <Link to="/appointment/create">Add appointment</Link>
          <Link to="/appointments">List appointments</Link>
          <SideNavItem divider />
          <Link to="/calendar">Calendar</Link>
          <SideNavItem divider />
          <Link to="/profile">Profile</Link>
        </SideNav >

        <div style={main} className="main">
          <header style={header}>
            <a style={menu} data-activates="sideNav" className="button-collapse white-text hide-on-large-only">
              <i className="material-icons">menu</i>
            </a>
            <center>
              <h1 style={title}>{this.props.title}</h1>
            </center>
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