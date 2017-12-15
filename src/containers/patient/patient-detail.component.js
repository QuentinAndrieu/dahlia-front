import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import { Link, Redirect } from 'react-router-dom';
import moment from 'moment';

class PatientDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
        }

        this.props.setTitle('');
        this.removePatient = this.removePatient.bind(this);
    }

    componentDidMount() {
        this.props.setTitle(this.props.patient.firstname + ' ' + this.props.patient.lastname);
    }

    removePatient(id) {
        this.props.removePatient(id).then(() => {
            // this.setState(() => {
            //     redirect: true
            // });
        }).catch((err) => {
            console.log(err);
        });
    }

    removeAppointment(id) {
        this.props.removeAppointment(id);
    }

    formatAppointments(appointments) {
        const formatAppointments = appointments.map((appointment) => {
            appointment.date = moment(appointment.date).format('LLLL');
            return appointment;
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
                <Col s={11}>
                    <p>{appointment.description}</p>
                    <p>{appointment.date}</p>
                </Col>
                <Col s={1}>
                    <Link to={this.customPath('/appointment/update', appointment._id)}>
                        <i className="small material-icons icons">create</i>
                    </Link>
                    <p>
                        <i onClick={() => { this.removeAppointment(appointment._id) }}
                            className="small material-icons icons">delete</i>
                    </p>
                </Col>
            </div>);

        return (
            <Row >
                <div className="patient-detail">
                    <Col s={12} m={3}  >
                        <p><strong>Firstname:</strong> {patient.firstname}</p>
                        <p><strong>Lastname:</strong> {patient.lastname}</p>
                        <p><strong>Birthday:</strong> {patient.birthday}</p>
                    </Col>
                    <Col s={12} m={9}>
                        <p>{patient.description}</p>
                    </Col>
                </div>
                {mappedAppointments}
                <div className="fixed-action-btn vertical click-to-toggle">
                    <a className="btn-floating btn-large">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul>
                        <li>
                            <Link className="btn-floating" to={this.customPath('/patient/update', patient._id)}>
                                <i className="material-icons">create</i>
                            </Link>
                        </li>
                        <li>
                            <Link className="btn-floating" to="/patients">
                                <i onClick={() => { this.removePatient(patient._id) }}
                                    className="material-icons">delete</i>
                            </Link>
                        </li>
                        <li>
                            <Link className="btn-floating" to={patient._id + '/appointment/create'}>
                                <i className="material-icons">add</i>
                            </Link>
                        </li>
                    </ul>
                </div>
                {this.state.redirect && (
                    <Redirect to="/patients" />
                )}
            </Row>
        );
    }
}

export default PatientDetail;
