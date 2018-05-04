import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-materialize';

class SideNav extends Component {

    constructor() {
        super();

        this.logOut = this.logOut.bind(this);
    }

    logOut() {
        this.props.setJWTToken(null);
        sessionStorage.setItem('jwtToken', null);
    }

    isActive(link) {
        return this.props.title === link ? 'active' : '';
    }

    render() {

        return (
            <div>
                <ul className="collection side-nav-custom hide-on-med-and-down">
                    <Link className={'collection-item ' + this.isActive('home')} to="/">Home</Link>
                    <Link className={'collection-item ' + this.isActive('list-patient')} to="/patients">List patient</Link>
                    <Link className={'collection-item ' + this.isActive('create-patient')} to="/patient/create">Create patient</Link>
                    <Link className={'collection-item ' + this.isActive('profile')} to="/profile">Profile</Link>
                    <Link className={'collection-item ' + this.isActive('calendar')} to="/calendar">Calendar</Link>
                    <Link className="collection-item" onClick={this.logOut} to="/signin">Sign out</Link>
                </ul>
                <Row className="hide-on-large-only">
                    <Col s={2}>
                        <Link to="/"><i class="small material-icons">home</i></Link>
                    </Col>
                    <Col s={2}>
                        <Link to="/patients"><i class="small material-icons">list</i></Link>
                    </Col>
                    <Col s={2}>
                        <Link to="/patient/create"><i class="small material-icons">create</i></Link>
                    </Col>
                    <Col s={2}>
                        <Link to="/calendar"><i class="small material-icons">perm_contact_calendar</i></Link>
                    </Col>
                    <Col s={2}>
                        <Link to="/profile"><i class="small material-icons">person</i></Link>
                    </Col>
                    <Col s={2}>
                        <Link onClick={this.logOut} to="/signin"><i class="small material-icons">arrow_drop_down_circle</i></Link>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default SideNav;
