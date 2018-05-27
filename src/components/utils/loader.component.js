import React, { Component } from 'react';
import { Row, Col, Preloader } from 'react-materialize';

class Loader extends Component {

    render() {
        return (
            <Row>
                <Col s={12}>
                    <Preloader size='big' />
                </Col>
            </Row>
        );
    }
}

export default Loader;