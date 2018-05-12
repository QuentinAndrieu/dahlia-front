import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import { Link, Redirect } from 'react-router-dom';
import moment from 'moment';

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
            window.M.toast({ html: 'Patient deleted', classes: 'toast-green' }, 2000);
        }).catch((err) => {
            window.M.toast({ html: err, classes: 'toast-green' }, 2000);
        });
    }

    updateToTrashAppointment(id) {
        this.props.updateToTrashAppointment(id).then((appointment) => {
            window.M.toast({ html: 'Appointment deleted', classes: 'toast-green' }, 2000);
        }).catch((err) => {
            window.M.toast({ html: err, classes: 'toast-green' }, 2000);
        });
    }

    getActiveAppointments(appointments) {
        const activeAppointments = appointments.filter((appointment) => {
            return !appointment.trash;
        });

        return activeAppointments;
    }


    customPath(path, id) {
        return path + '/' + id;
    }

    formatDate(date) {
        return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    }

    render() {
        const { patient } = this.props;

        let mappedAppointments = this.getActiveAppointments(patient.appointments).map(appointment =>
            <div className="patient-detail-appointment" key={appointment._id}>
                <Col s={12}>
                    <p>{appointment.description}</p>
                    <label>
                        {this.formatDate(appointment.date)} / {appointment.duration} minutes / {appointment.rate} dollars
                     </label>
                </Col>
                <Col s={2} m={1} l={1}>
                    <Link to={this.customPath('/appointment/update', appointment._id)}>
                        <strong>Update</strong>
                    </Link>
                </Col>
                <Col s={2} m={1} l={1}>
                    <Link onClick={() => { this.updateToTrashAppointment(appointment._id) }} to="#">
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
                        <Col s={12} m={12} l={5} className="hide-on-med-and-down" >
                            <Col s={3}>
                                <Link to={this.customPath('/patient/update', patient._id)}>
                                    <strong>Update</strong>
                                </Link>
                            </Col>
                            <Col s={3}>
                                <Link onClick={() => { this.updateToTrashPatient(patient._id) }} to="#">
                                    <strong>Delete</strong>
                                </Link>
                            </Col>
                            <Col s={6}>
                                <Link to={patient._id + '/appointment/create'}>
                                    <strong>Add appointment</strong>
                                </Link>
                            </Col>
                        </Col>
                        <Col l={7} m={8} s={12}>
                            <label>About</label>
                            <p>{patient.description}</p>
                        </Col>
                        <Col l={5} m={4} s={12}>
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
