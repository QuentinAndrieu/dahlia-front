import React, { Component } from 'react';
import Root from '../containers/root.container';
import { Container } from 'react-materialize';
import '../index.css';
import SideNavCustom from '../containers/side-nav-custom.container';
import decode from 'jwt-decode';

class App extends Component {

  constructor() {
    super();
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    const token = sessionStorage.getItem('jwtToken');
    if (this.jwtTokenIsValid(token)) {
      this.props.fetchUser(token, () => {
        this.props.setJWTToken(token);
        this.setState({
          loading: false
        });
      });
    } else {
      this.setState({
        loading: false
      });
    }
  }

  jwtTokenIsValid(token) {
    if (!token) {
      return false;
    }

    try {
      const { exp } = decode(token);

      if (exp < new Date().getTime() / 1000) {
        return false;
      }
    } catch (e) {
      return false;
    }

    return true;
  }


  render() {
    let main = {
      paddingLeft: '300px'
    }

    const header = {
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

    if (this.state.loading) {
      return (<div></div>);
    }

    return (
      <div>
        <SideNavCustom />

        <div style={main} className="main">
          <header style={header} className="header">
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
      </div>
    );
  }
}

export default App;