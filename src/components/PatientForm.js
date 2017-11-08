import React, { Component } from 'react';
import { Col, Row, Input } from 'react-materialize';

class PatientForm extends Component {
    render() {

        const patientForm = {
            marginTop: '57px'
        }

        return (
            <Row>
                <Col s={3}>
                    <h4 className='cyan-text'>Patient Form</h4>
                </Col>
                <Col s={9}>
                    <div style={patientForm}>
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
