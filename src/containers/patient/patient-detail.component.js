import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import { Link, Redirect } from 'react-router-dom';

class PatientDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        }

        this.props.setTitle('patient-detail');
        this.updateToTrashPatient = this.updateToTrashPatient.bind(this);
    }

    componentDidMount() {
        this.props.setTitle(this.props.patient.firstname + ' ' + this.props.patient.lastname);
    }

    updateToTrashPatient(id) {
        this.props.updateToTrashPatient(id).then((patient) => {
            this.setState({
                redirect: true
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    updateToTrashAppointment(id) {
        this.props.updateToTrashAppointment(id).catch((err) => {
            console.log(err);
        });
    }

    formatAppointments(appointments) {
        const formatAppointments = appointments.filter((appointment) => {
            return !appointment.trash;
        });

        return formatAppointments;
    }


    customPath(path, id) {
        return path + '/' + id;
    }

    render() {
        const { patient } = this.props;

        let mappedAppointments = this.formatAppointments(patient.appointments).map(appointment =>
            <div key={appointment._id}>
                <Col s={12}>
                    <p>{appointment.description}</p>
                </Col>
                <Col s={2} m={1} l={1}>
                    <Link className="dahlia-green" to={this.customPath('/appointment/update', appointment._id)}>
                        <strong>Update</strong>
                    </Link>
                </Col>
                <Col s={2} m={1} l={1}>
                    <Link className="violet-link" onClick={() => { this.updateToTrashAppointment(appointment._id) }} to="#">
                        <strong>Delete</strong>
                    </Link>
                </Col>
                <Col s={8} m={10} l={10}></Col>
            </div>);

        const appointmentsLabel = mappedAppointments.length > 0 ? 'Appointments' : '';

        return (
            <div>
                <div className="patient-detail">
                    <Row>
                        <Col s={12} m={12} l={7} >
                            <h4>{patient.firstname} {patient.lastname}</h4>
                        </Col>
                        <Col s={12} m={12} l={5} >
                            <Col s={3}>
                                <Link className="dahlia-green" to={this.customPath('/patient/update', patient._id)}>
                                    <strong>Update</strong>
                                </Link>
                            </Col>
                            <Col s={3}>
                                <Link className="violet-link" onClick={() => { this.updateToTrashPatient(patient._id) }} to="#">
                                    <strong>Delete</strong>
                                </Link>
                            </Col>
                            <Col s={6}>
                                <Link className="dahlia-green" to={patient._id + '/appointment/create'}>
                                    <strong>Add appointment</strong>
                                </Link>
                            </Col>
                        </Col>
                        <Col l={6} m={6} s={12}>
                            <label>About</label>
                            <p>{patient.description}</p>
                        </Col>
                        <Col l={6} m={6} s={12}>
                            <label>Occupation</label>
                            <p>{patient.occupation}</p>
                            <label>Birthday</label>
                            <p>{patient.birthday}</p>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col s={12}>
                        <label>{appointmentsLabel}</label>
                    </Col>
                    {mappedAppointments}
                </Row>
                {this.state.redirect && (
                    <Redirect to="/patients" />
                )}
            </div>
        );
    }
}

export default PatientDetail;
