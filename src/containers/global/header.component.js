import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';

class Header extends Component {

    render() {
        return (
            <header>
                <Row>
                    <Col s={4} m={1} >
                        <img alt="" className="nav-logo" src="images/Dahlia.png" />
                    </Col>
                    <Col s={8} m={11}>
                        <h4>Dahlia</h4>
                    </Col>
                </Row>
            </header>
        );
    }
}

export default Header;
