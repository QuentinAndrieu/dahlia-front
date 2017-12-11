import React, { Component } from 'react';
import Root from '../../containers/global/root.container';
import { Container } from 'react-materialize';


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
      this.props.isAuthenticated(token)
        .then(() => {
          this.props.setJWTToken(token);
          return this.props.fetchUser(token);
        }).then((user) => {
          this.setLoadingState(false);
        }).catch((err) => {
          console.log(err);
          this.setLoadingState(false);
        });
    } else {
      this.setLoadingState(false);
    }
  }

  setLoadingState(state) {
    this.setState({
      loading: state
    });
  }

  render() {
    if (this.state.loading) {
      return (<div></div>);
    }

    return (
      <div>
        <SideNavCustom />

        <div className="main">
          <header className="header">
            <a data-activates="sideNav" className="menu button-collapse white-text hide-on-large-only">
              <i className="material-icons">menu</i>
            </a>
            <center>
              <h1 className="title">{this.props.title}</h1>
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