import React, { Component } from 'react';
import ListCustom from '../../components/utils/list-custom.component';
import { Row, Col } from 'react-materialize';

class AdminList extends Component {

    constructor(props) {
        super(props);

        const updatedUsers = this.props.users.map((user) => {
            user.link = user.firstname + ' ' + user.lastname;
            return user;
        });

        const updatedPatients = this.props.patients.map((patient) => {
            patient.link = patient.firstname + ' ' + patient.lastname;
            return patient;
        });

        const updatedAppointments = this.props.appointments.map((appointment) => {
            appointment.link = appointment.title + ' ' + appointment.date;
            return appointment;
        });

        this.state = {
            users: updatedUsers,
            patients: updatedPatients,
            appointments: updatedAppointments
        }
    }

    componentDidMount() {
        this.props.setTitle('Admin');
    }

    render() {
        return (
            <Row>
                <Col s={12} m={4}>
                    <ListCustom list={this.state.users} title="users"/>
                </Col>
                <Col s={12} m={4}>
                    <ListCustom list={this.state.patients} title="patients" />
                </Col>
                <Col s={12} m={4}>
                    <ListCustom list={this.state.appointments} title="appointments" />
                </Col>
            </Row>
        );
    }
}

export default AdminList;
