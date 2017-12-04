import React, { Component } from 'react';
import { Col, Row, Input, Button } from 'react-materialize';
import { Redirect, Link } from 'react-router-dom';
import moment from 'moment';

class AppointmentUpdate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            _id: '',
            description: '',
            date: '',
            rate: '',
            duration: '',
            redirect: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        this.props.setTitle('Edit Appointment');
        this.setState(this.formatToState(this.props.appointment));
    }

    updateAppointment(id, description, title, date, rate, duration) {
        this.props.updateAppointment(id, description, title, date, rate, duration, (idPatient) => {
            this.setState({
                redirect: true
            });
        });
    }

    customPath(path, id) {
        return path + '/' + id;
    }

    formatToState(appointment) {
        return {
            ...this.props.appointment,
            rate: this.props.appointment.rate.toString(),
            duration: this.props.appointment.duration.toString()
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    formatDate(date) {
        return moment(date).format('LLLL');
    }

    submit(event) {
        event.preventDefault();

        this.updateAppointment(this.state._id, this.state.description, this.state.title, this.state.date,
            this.state.rate, this.state.duration);
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <Row>
                    <Input s={12} name="description" placeholder="Description" type="textarea" value={this.state.description} onChange={this.handleChange} />
                    <Input s={12} m={6} name="rate" placeholder="Rate" value={this.state.rate} onChange={this.handleChange} />
                    <Input s={12} m={6} name="duration" placeholder="Duration" value={this.state.duration} onChange={this.handleChange} />
                    <Col s={12}>
                        <p><strong>{this.formatDate(this.state.date)}</strong></p>
                    </Col>
                    <center>
                        <Button s={12} type="submit">Submit</Button>
                    </center>
                </Row>
                <div className="fixed-action-btn">
                    <Link to={this.customPath('/patient', this.state.id_patient)} className="btn-floating btn-large">
                        <i className="large material-icons">person</i>
                    </Link>
                </div>
                {this.state.redirect && (
                    <Redirect to={this.customPath('/patient', this.state.id_patient)} />
                )}
            </form>
        );
    }
}

export default AppointmentUpdate;