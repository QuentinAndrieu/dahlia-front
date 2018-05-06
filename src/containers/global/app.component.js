import React, { Component } from 'react';
import Root from '../../containers/global/root.container';
import { Row, Col } from 'react-materialize';
import SideNav from './side-nav.container';
import Header from './header.container';

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
        <Header />

        <div>
          <div className="section">
            <Row>
              <Col className="side-nav-menu" s={12} m={12} l={3}>
                <SideNav />
              </Col>
              <Col s={12} m={12} l={9}>
                <Root />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default App;