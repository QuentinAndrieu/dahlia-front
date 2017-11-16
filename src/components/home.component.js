import React, { Component } from 'react';
import { Row, Col, Card, Button } from 'react-materialize';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        const card = {
            height: '240px'
        };

        const addButton = {
            marginTop: '50px'
        };

        const homeIcon = {
            marginLeft: '15px'
        };

        return (
            <div className='home'>
                <h1>HOME PAGE</h1>
            </div>
        );
    }
}

export default Home;
