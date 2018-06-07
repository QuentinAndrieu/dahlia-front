import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import { Link, Redirect } from 'react-router-dom';
import ModalCustom from '../../components/modal/modal-custom.component';
import AppointmentCreate from '../appointment/appointment-create.container';
import AppoinmentDetail from '../appointment/appointment-detail.container';
import PatientUpdate from '../patient/patient-update.container';

class PatientDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
            modalIsOpenAddAppointment: false,
            modalIsOpenUpdatePatient: false
        }

        this.props.setTitle('patient-detail');
        this.updateToTrashPatient = this.updateToTrashPatient.bind(this);
        this.openModalAddAppointment = this.openModalAddAppointment.bind(this);
        this.closeModalAddAppointment = this.closeModalAddAppointment.bind(this);
        this.openModalUpdatePatient = this.openModalUpdatePatient.bind(this);
        this.closeModalUpdatePatient = this.closeModalUpdatePatient.bind(this);
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
        return appointments.filter((appointment) => {
            return !appointment.trash;
        });
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

    openModalUpdatePatient() {
        this.setState({
            modalIsOpenUpdatePatient: true
        });
    }

    closeModalUpdatePatient() {
        this.setState({
            modalIsOpenUpdatePatient: false
        });
    }

    customPath(path, id) {
        return path + '/' + id;
    }

    render() {
        const { patient } = this.props;
        const mappedAppointments = this.getActiveAppointments(patient.appointments).map(appointment =>
            <AppoinmentDetail key={appointment._id} appointment={appointment} />);
        const appointmentsLabel = mappedAppointments.length > 0 ? 'Appointments' : '';

        return (
            <div className="patient-detail">
                <Row>
                    <Col s={12} m={12} l={6} >
                        <h4 className="patient-title">{patient.firstname} {patient.lastname}</h4>
                    </Col>

                    <Col s={12} m={12} l={6} className="hide-on-med-and-down" >
                        <Col s={3}>
                            <Link to="#" onClick={this.openModalUpdatePatient}>
                                <strong>Edit</strong>
                            </Link>

                            <ModalCustom
                                label="Update patient"
                                modalIsOpen={this.state.modalIsOpenUpdatePatient}
                                closeModal={this.closeModalUpdatePatient}
                                component={
                                    <PatientUpdate
                                        closeModal={this.closeModalUpdatePatient}
                                        patient={patient}
                                    />}
                            />
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

                    <Col l={9} m={10} s={12}>
                        <label>About</label>
                        <p>{patient.description}</p>
                    </Col>

                    <Col l={3} m={2} s={12}>
                        <label>Occupation</label>
                        <p>{patient.occupation}</p>

                        <label>Birthday</label>
                        <p>{patient.birthday}</p>
                    </Col>
                </Row>

                <Row className="appointments-label">
                    <Col s={12}>
                        <label>{appointmentsLabel}</label>
                    </Col>
                </Row>
                {mappedAppointments}
                {this.state.redirect && (
                    <Redirect to="/patients" />
                )}
            </div>
        );
    }
}

export default PatientDetail;
