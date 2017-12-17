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
            return appointment.trash ==='false';
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
                        <Link to="#">
                            <i onClick={() => { this.updateToTrashAppointment(appointment._id) }}
                                className="small material-icons icons">delete</i>
                        </Link>
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
                            <Link className="btn-floating" to="#">
                                <i onClick={() => { this.updateToTrashPatient(patient._id) }}
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
