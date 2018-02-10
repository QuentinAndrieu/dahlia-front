import React, { Component } from 'react';
import Root from '../../containers/global/root.container';
import { Container, Row, Col, Parallax } from 'react-materialize';
import SideNav from './side-nav.container';
import Navbar from './navbar.container';
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
        <Navbar />

        <div>
          <Parallax imageSrc="images/dahlia-parallax.png" />
          <div className="section">
            <Container>
              <Row>
                <Col s={12} m={12} l={4}>
                  <SideNav />
                </Col>
                <Col className="main-root" s={12} m={12} l={8}>
                  <Root />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default App;