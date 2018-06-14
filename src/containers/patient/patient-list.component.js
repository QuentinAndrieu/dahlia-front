import React, { Component } from 'react';
import ListCustom from '../../components/utils/list-custom.component';
import Col from 'react-materialize/lib/Col';
import Row from 'react-materialize/lib/Row';

class PatientList extends Component {

    constructor(props) {
        super(props);

        const updatedPatients = this.props.patients.map((patient) => {
            patient.link = patient.firstname + ' ' + patient.lastname;
            return patient;
        });

        this.state = {
            patients: updatedPatients,
            patient: null
        }

        this.setPatient = this.setPatient.bind(this);
    }

    setPatient(patient) {
        this.setState({
            patient: patient
        })
    }

    customPath(path, id) {
        if (path) {
            return path + '/' + id;
        } else {
            return '/';
        }
    }

    componentDidMount() {
        this.props.setTitle('list-patient');
    }

    render() {
        return (
            <Row>
                <Col s={12} m={12} l={12}>
                    <ListCustom list={this.state.patients} path="/patient" title="patients" setItem={this.setPatient} />
                </Col>
            </Row>
        );
    }
}

export default PatientList;
