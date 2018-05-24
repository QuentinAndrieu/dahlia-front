import React, { Component } from 'react';
import { Col } from 'react-materialize';
import { Link } from 'react-router-dom';
import moment from 'moment';

class AppointmentDetail extends Component {

    constructor(props) {
        super(props);

        this.updateToTrashAppointment = this.updateToTrashAppointment.bind(this);
    }

    updateToTrashAppointment(id) {
        this.props.updateToTrashAppointment(id).then((appointment) => {
            window.M.toast({
                html: 'Appointment deleted',
                classes: 'toast-custom',
                displayLength: 1000
            });
        }).catch((err) => {
            window.M.toast({
                html: 'Error during appointment delete',
                classes: 'toast-custom-error',
                displayLength: 1000
            });
        });
    }

    formatDate(date) {
        return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    }

    customPath(path, id) {
        return path + '/' + id;
    }

    render() {
        return (
            <div className="patient-detail-appointment" key={this.props.appointment._id}>
                <Col s={12}>
                    <p>{this.props.appointment.description}</p>
                    <label>
                        {this.formatDate(this.props.appointment.date)} / {this.props.appointment.duration} minutes / {this.props.appointment.rate} dollars
                     </label>
                </Col>
                <Col s={2} m={1} l={1}>
                    <Link to={this.customPath('/appointment/update', this.props.appointment._id)}>
                        <strong>Update</strong>
                    </Link>
                </Col>
                <Col s={2} m={1} l={1}>
                    <Link onClick={() => { this.updateToTrashAppointment(this.props.appointment._id) }} to="#">
                        <strong>Delete</strong>
                    </Link>
                </Col>
                <Col s={8} m={10} l={10}></Col>
            </div>
        );
    }
}

export default AppointmentDetail;
