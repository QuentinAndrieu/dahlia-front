import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';

class Header extends Component {

    render() {
        return (
            <header>
                <Row>
                    <Col s={12}>
                        <img alt="" className="nav-logo" src="images/Dahlia.png" />
                    </Col>
                </Row>
            </header>
        );
    }
}

export default Header;
