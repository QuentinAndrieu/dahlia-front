import React, { Component } from 'react';
import Root from '../../containers/global/root.container';
import { Container, Row, Col, Parallax } from 'react-materialize';
import { Link } from 'react-router-dom';
import { animateScroll as scroll, scroller } from 'react-scroll'
import SideNavCustom from './side-nav-custom.container';

class App extends Component {

  constructor() {
    super();
    this.state = {
      loading: true
    }

    this.setLoadingState = this.setLoadingState.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  logOut() {
    this.props.setJWTToken(null);
    sessionStorage.setItem('jwtToken', null);
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
        <div className="main">
          <header>
            <Row>
              <Col s={1}>
                <img alt="" className="nav-logo" src="images/Dahlia.png" />
              </Col>
              <Col s={11}>
                <h4>Dahlia</h4>
              </Col>
            </Row>
          </header>
          <nav>
            <div className="nav-wrapper white">
              <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><Link onClick={() => scroll.scrollTo(440)} to="/">Home</Link></li>
                <li><Link onClick={() => scroll.scrollTo(440)} to="/patients">Patients</Link></li>
                <li><Link onClick={() => scroll.scrollTo(440)} to="/calendar">Calendar</Link></li>
                <li><Link onClick={() => scroll.scrollTo(440)} to="/profile">Profile</Link></li>
                <li><Link onClick={this.logOut} to="/signin" >Log out</Link></li>
              </ul>
            </div>
          </nav>

          <div>
            <Parallax imageSrc="images/dahlia-parallax.png" />
            <div className="section">
              <Container>
                <Row>
                  <Col s={12} m={4}>
                    <SideNavCustom />
                  </Col>
                  <Col className="main-root" s={12} m={8}>
                    <Root />
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;