import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-materialize';

class SideNav extends Component {

    constructor() {
        super();

        this.logOut = this.logOut.bind(this);
    }

    logOut() {
        let confirm = window.confirm('Sign out ?');

        if (confirm) {
            this.props.setJWTToken(null);
            sessionStorage.setItem('jwtToken', null);
            this.props.unauthenticated();
        }
    }

    isActive(link) {
        return this.props.title === link ? 'active' : '';
    }

    render() {
        return (
            <div>
                <ul className="collection side-nav-custom hide-on-med-and-down">
                    <Link className="collection-item" to="/">
                        <i className={'small material-icons icon-sidenav ' + this.isActive('home')}>home</i> Home
                    </Link>

                    <Link className="collection-item" to="/patients">
                        <i className={'small material-icons icon-sidenav ' + this.isActive('list-patient')}>list</i> List patients
                    </Link>

                    <Link className="collection-item" to="/patient/create">
                        <i className={'small material-icons icon-sidenav ' + this.isActive('create-patient')}>create</i> New patient
                    </Link>

                    <Link className="collection-item" to="/calendar">
                        <i className={'small material-icons icon-sidenav ' + this.isActive('calendar')}>perm_contact_calendar</i> Calendar
                    </Link>

                    <Link className="collection-item" to="/statistic">
                        <i className={'small material-icons icon-sidenav ' + this.isActive('statistic')}>show_chart</i> Statistics
                    </Link>

                    <Link className="collection-item" to="/setting">
                        <i className={'small material-icons icon-sidenav ' + this.isActive('setting')}>settings</i> Setting
                    </Link>

                    <Link className="collection-item" onClick={this.logOut} to="#">
                        <i className="small material-icons icon-sidenav">arrow_drop_down_circle</i> Sign out
                    </Link>
                </ul>
                <Row className="hide-on-large-only">
                    <Col s={2}>
                        <Link className="link-nav" to="/">
                            <i className={'small material-icons icon-sidenav ' + this.isActive('home')}>home</i>
                        </Link>
                    </Col>

                    <Col s={2}>
                        <Link className="link-nav" to="/patients">
                            <i className={'small material-icons icon-sidenav ' + this.isActive('list-patient')}>list</i>
                        </Link>
                    </Col>

                    <Col s={2}>
                        <Link className="link-nav" to="/patient/create">
                            <i className={'small material-icons icon-sidenav ' + this.isActive('create-patient')}>create</i>
                        </Link>
                    </Col>

                    <Col s={2}>
                        <Link className="link-nav" to="/calendar">
                            <i className={'small material-icons icon-sidenav ' + this.isActive('calendar')}>perm_contact_calendar</i>
                        </Link>
                    </Col>

                    <Col s={2}>
                        <Link className="link-nav" to="/statistic">
                            <i className={'small material-icons icon-sidenav ' + this.isActive('statistic')}>show_chart</i>
                        </Link>
                    </Col>

                    <Col s={2}>
                        <Link className="link-nav" to="/setting">
                            <i className={'small material-icons icon-sidenav ' + this.isActive('setting')}>settings</i>
                        </Link>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default SideNav;
