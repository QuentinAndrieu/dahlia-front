import React, { Component } from 'react';
import { Row, Input, Col } from 'react-materialize';
import moment from 'moment';

class PatientDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            patient: ''
        }

        this.props.setTitle('');
    }

    componentDidMount() {
        this.setState({
            patient: this.getPatient(this.props.match.params.id)
        }, function(){
            this.props.setTitle(this.getTitle(this.state.patient.firstname, this.state.patient.lastname));
        });
    }

    getPatient(id) {
        const patient = this.props.patients.filter(function (patient) {
            return (patient._id === id);
        });

        if (patient[0]) {
            patient[0].birthday = moment(patient[0].birthday).format('MMMM Do YYYY')
        }

        return patient[0];
    }

    getTitle(firstname, lastname) {
        if (firstname && lastname) {
            return firstname + ' ' + lastname;
        }

        return '';
    }

    render() {
        const detailPatient = {
            minHeight: '400px'
        }

        return (
            <Row >
                <div style={detailPatient}>
                    <Col s={3} >
                        <p>
                            <strong>Firstname:</strong> {this.state.patient.firstname}
                        </p>
                        <p>
                            <strong>Lastname:</strong> {this.state.patient.lastname}
                        </p>
                        <p>
                            <strong>Birthday:</strong> {this.state.patient.birthday}
                        </p>
                    </Col>
                    <Col s={9}>
                        <p>{this.state.patient.description}</p>
                    </Col>
                </div>
                <Col s={3}>
                    <p>
                        <strong>Add appointment:</strong>
                    </p>
                </Col>
                <Col s={9}>
                    <Input s={12} name="description" label="Description" type="textarea" />
                </Col>
            </Row>
        );
    }
}

export default PatientDetail;
