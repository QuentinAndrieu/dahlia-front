import React, { Component } from 'react';
import { Col, Row, Input } from 'react-materialize';
import './PatientForm.css'

class PatientForm extends Component {
    render() {
        return (
            <Row>
                <Col s={3}>
                    <h4 className='cyan-text'>Patient Form</h4>
                </Col>
                <Col s={9}>
                    <div className='patient-form'>
                        <Row>
                            <Input s={6} label='First Name' />
                            <Input s={6} label='Last Name' />
                        </Row>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default PatientForm;
