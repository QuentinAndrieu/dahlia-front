import React, { Component } from 'react';
import Root from '../../containers/global/root.container';
import { Container } from 'react-materialize';
import '../../index.css';
import SideNavCustom from '../../containers/global/side-nav-custom.container';

class App extends Component {

  constructor() {
    super();
    this.state = {
      loading: true
    }

    this.setLoadingState = this.setLoadingState.bind(this);
  }

  componentDidMount() {
    const token = sessionStorage.getItem('jwtToken');

    if (token) {
      this.props.isAuthenticated(token, () => {
        this.props.setJWTToken(token);
        this.props.fetchUser(token, (user) => {
          this.setLoadingState(false);
        }, () => {
          this.setLoadingState(false);
        });
      });
    } else {
      this.setLoadingState(false)
    }
  }

  setLoadingState(state) {
    this.setState({
      loading: state
    });
  }

  fetchAdminData() {
    this.props.fetchAllUsers(() => {
      this.props.fetchAllPatients(() => {
        this.props.fetchAllAppointments(() => {
          this.setLoadingState(false)
        });
      });
    });
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