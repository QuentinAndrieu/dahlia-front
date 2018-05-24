import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import { Link, Redirect } from 'react-router-dom';
import ModalCustom from '../../components/modal/modal-custom.component';
import AppointmentCreate from '../appointment/appointment-create.container';
import AppoinmentDetail from '../appointment/appointment-detail.container';

class PatientDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
            modalIsOpenAddAppointment: false
        }

        this.props.setTitle('patient-detail');
        this.updateToTrashPatient = this.updateToTrashPatient.bind(this);
        this.openModalAddAppointment = this.openModalAddAppointment.bind(this);
        this.closeModalAddAppointment = this.closeModalAddAppointment.bind(this);
    }

    updateToTrashPatient(id) {
        this.props.updateToTrashPatient(id).then((patient) => {
            this.setState({
                redirect: true
            });
            window.M.toast({
                html: 'Patient deleted',
                classes: 'toast-custom',
                displayLength: 1000
            });
        }).catch((err) => {
            window.M.toast({
                html: 'Error during patient delete',
                classes: 'toast-custom-error',
                displayLength: 1000
            });
        });
    }

    getActiveAppointments(appointments) {
        const activeAppointments = appointments.filter((appointment) => {
            return !appointment.trash;
        });

        return activeAppointments;
    }

    openModalAddAppointment() {
        this.setState({
            modalIsOpenAddAppointment: true
        });
    }

    closeModalAddAppointment() {
        this.setState({
            modalIsOpenAddAppointment: false
        });
    }

    customPath(path, id) {
        return path + '/' + id;
    }

    render() {
        const { patient } = this.props;
        const mappedAppointments = this.getActiveAppointments(patient.appointments).map(appointment =>
            <AppoinmentDetail appointment={appointment} />);
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
                                <Link to="#" onClick={this.openModalAddAppointment}>
                                    <strong>Add appointment</strong>
                                </Link>
                                <ModalCustom
                                    label="Add appointment"
                                    modalIsOpen={this.state.modalIsOpenAddAppointment}
                                    closeModal={this.closeModalAddAppointment}
                                    component={
                                        <AppointmentCreate
                                            closeModal={this.closeModalAddAppointment}
                                            patient={patient}
                                        />}
                                />
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
