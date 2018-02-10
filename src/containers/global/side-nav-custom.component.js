import React, { Component } from 'react';
import { Collection } from 'react-materialize';
import { Link } from 'react-router-dom';

class SideNavCustom extends Component {

    render() {
        return (
            <Collection>
                <Link className="collection-item" to="/patients">List patient</Link>
                <Link className="collection-item" to="/patient/create">Create patient</Link>
                <Link className="collection-item" to="/calendar">Calendar</Link>
                <Link className="collection-item" to="/profile">Profile</Link>
            </Collection>
        );
    }
}

export default SideNavCustom;
