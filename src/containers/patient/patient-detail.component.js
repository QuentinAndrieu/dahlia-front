import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import { Link, Redirect } from 'react-router-dom';

class PatientDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        }

        this.props.setTitle('');
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
                <Row>
                    <Col s={12}>{appointment.description}</Col>
                    <Col s={1}>
                        <Link className="green-link" to={this.customPath('/appointment/update', appointment._id)}>
                            <strong>Update</strong>
                        </Link>
                    </Col>
                    <Col s={1}>
                        <Link className="green-link" onClick={() => { this.updateToTrashAppointment(appointment._id) }} to="#">
                            <strong>Delete</strong>
                        </Link>
                    </Col>
                    <Col s={10}></Col>
                </Row>
            </div>);

        return (
            <div>
                <div className="patient-detail">
                    <Row>
                        <Col s={12} m={12} l={7} >
                            <h4>{patient.firstname} {patient.lastname}</h4>
                        </Col>
                        <Col s={12} m={12} l={5} >
                            <Col s={3}>
                                <Link className="green-link" to={this.customPath('/patient/update', patient._id)}>
                                    <strong>Update</strong>
                                </Link>
                            </Col>
                            <Col s={3}>
                                <Link className="green-link" onClick={() => { this.updateToTrashPatient(patient._id) }} to="#">
                                    <strong>Delete</strong>
                                </Link>
                            </Col>
                            <Col s={6}>
                                <Link className="green-link" to={patient._id + '/appointment/create'}>
                                    <strong>Add appointment</strong>
                                </Link>
                            </Col>
                        </Col>
                        <Col s={12}>
                            <p>{patient.description}</p>
                        </Col>
                    </Row>
                </div>
                {mappedAppointments}
                {this.state.redirect && (
                    <Redirect to="/patients" />
                )}
            </div>
        );
    }
}

export default PatientDetail;
