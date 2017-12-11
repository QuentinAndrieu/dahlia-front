import React, { Component } from 'react';
import { Row, Input, Col } from 'react-materialize';
import { Link, Redirect } from 'react-router-dom';
import moment from 'moment';

class PatientDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
            description: '',
            removing: false
        }

        this.props.setTitle('');
        this.removePatient = this.removePatient.bind(this);
        this.addAppointment = this.addAppointment.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.setTitle(this.getTitle(this.props.patient.firstname, this.props.patient.lastname));
    }

    removePatient(id) {
        this.props.removePatient(id, () => {
            this.setState({
                redirect: true
            });
        });
    }

    addAppointment(description) {
        const date = new Date();
        const rate = '60';
        const duration = '60';
        const title = this.getTitle(this.props.patient.firstname, this.props.patient.lastname);

        this.props.addAppointment(this.props.patient._id, description, title, date, rate, duration)
            .then(() => {
                this.setState({
                    description: ''
                });
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

    getTitle(firstname, lastname) {
        if (firstname && lastname) {
            return firstname + ' ' + lastname;
        }

        return '';
    }

    customPath(path, id) {
        return path + '/' + id;
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
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
                        <i className="icon-patient small material-icons icons">create</i>
                    </Link>
                    <p>
                        <i onClick={() => { this.removeAppointment(appointment._id) }}
                         className="icon-patient small material-icons icons">delete</i>
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
                    <Col s={11} m={8}>
                        <p>{patient.description}</p>
                    </Col>
                    <Col s={1}>
                        <p>
                            <Link to={this.customPath('/patient/update', patient._id)}>
                                <i className="icon-patient small material-icons icons">create</i>
                            </Link>
                        </p>
                        <p>
                            <i onClick={() => { this.removePatient(patient._id) }}
                             className="icon-patient small material-icons icons">delete</i>
                        </p>
                    </Col>
                </div>
                {mappedAppointments}
                <Col s={11}>
                    <Input s={12} name="description" value={this.state.description}
                        onChange={this.handleChange} placeholder="Add appointment" type="textarea" />
                </Col>
                <Col s={1}>
                    <p>
                        <i onClick={() => { this.addAppointment(this.state.description) }}
                         className="icon-patient small material-icons icons">send</i>
                    </p>
                </Col>
                {this.state.redirect && (
                    <Redirect to="/patients" />
                )}
            </Row>
        );
    }
}

export default PatientDetail;
