import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-materialize';

class SideNav extends Component {

    render() {
        return (
            <div>
                <ul className="collection side-nav-custom hide-on-med-and-down">
                    <Link className="collection-item" to="/patients">List patient</Link>
                    <Link className="collection-item" to="/patient/create">Create patient</Link>
                    <Link className="collection-item" to="/calendar">Calendar</Link>
                    <Link className="collection-item" to="/profile">Profile</Link>
                </ul>
                <Row className="hide-on-large-only">
                    <Col s={3}><Link className="collection-item" to="/patients">List patient</Link></Col>
                    <Col s={3}><Link className="collection-item" to="/patient/create">Create patient</Link></Col>
                    <Col s={3}><Link className="collection-item" to="/calendar">Calendar</Link></Col>
                    <Col s={3}><Link className="collection-item" to="/profile">Profile</Link></Col>
                </Row>
            </div>
        );
    }
}

export default SideNav;
