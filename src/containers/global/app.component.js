import React, { Component } from 'react';
import Root from '../../containers/global/root.container';
import { Container, Row, Col } from 'react-materialize';
import SideNavCustom from '../../containers/global/side-nav-custom.container';
import { Link } from 'react-router-dom';

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
        {/* <SideNavCustom /> */}

        <div className="main">
          {/* <header className="header">
            <a data-activates="sideNav" className="menu button-collapse white-text hide-on-large-only">
              <i className="material-icons">menu</i>
            </a>
            <center>
              <h1 className="title">{this.props.title}</h1>
            </center>
          </header> */}

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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/patients">Patients</Link></li>
                <li><Link to="/calendar">Calendar</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/signin" onClick={this.logOut}>Log out</Link></li>
              </ul>
            </div>
          </nav>

          <div className="main-header">
          </div>

          <div class="feature-description">
            {this.props.title}
          </div>

          <Container >
            <Root />
          </Container>
        </div>
      </div>
    );
  }
}

export default App;