import React, { Component } from 'react';
import ListCustom from '../../components/utils/list-custom.component';
import Col from 'react-materialize/lib/Col';
import Row from 'react-materialize/lib/Row';
import moment from 'moment';
import { Link } from 'react-router-dom';


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
        const patientDetail = this.state.patient ?
            <div className="patient-preview">
                <p>
                    <Link to={this.customPath('/patient', this.state.patient._id)}>
                        <strong>{this.state.patient.firstname} {this.state.patient.lastname}</strong>
                    </Link>
                </p>
                <label>Occupation</label>
                <p>
                    {this.state.patient.occupation}
                </p>
                <label>Birthday</label>
                <p>
                    {moment(this.state.patient.birthday).format('MM-DD-YYYY')}
                </p>
                <label>Description</label>
                <p className="description-patient-list">
                    {this.state.patient.description}
                </p>
            </div> : <div></div>;

        return (
            <Row>
                <Col s={9} m={9} l={8}>
                    <ListCustom list={this.state.patients} path="/patient" title="patients" setItem={this.setPatient} />
                </Col>
                <Col l={4} className="hide-on-med-and-down">
                    {patientDetail}
                </Col>
            </Row>
        );
    }
}

export default PatientList;
