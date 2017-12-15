import React, { Component } from 'react';
import { Row } from 'react-materialize';
import { Redirect, Link } from 'react-router-dom';
import AppointmentForm from '../../components/form/appointment-form.container';
import { SubmissionError } from 'redux-form';
import InputValidation from '../../service/input-validation.service';

class AppointmentCreate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        };

        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        this.props.setTitle('Add Appointment');
    }

    customPath(path, id) {
        return path + '/' + id;
    }

    submit(values) {
        const inputValidation = new InputValidation();

        const date = new Date();
        const title = this.props.patient.firstname + ' ' + this.props.patient.lastname;

        const formatValues = [{
            key: 'description',
            value: values.description
        }, {
            key: 'duration',
            value: values.duration && values.duration.toString()
        }, {
            key: 'rate',
            value: values.duration && values.rate.toString()
        }];

        const required = inputValidation.required(formatValues);

        if (required) {
            return this.props.addAppointment(this.props.patient._id, values.description,
                title, date, values.rate, values.duration)
                .then(() => {
                    this.setState({
                        redirect: true
                    });
                }).catch((err) => {
                    throw new SubmissionError({
                        _error: err
                    });
                });
        }
    }

    render() {
        return (
            <Row>
                <AppointmentForm onSubmit={this.submit} button="Submit" />

                <div className="fixed-action-btn">
                    <Link to={this.customPath('/patient', this.props.patient._id)} className="btn-floating btn-large">
                        <i className="large material-icons">person</i>
                    </Link>
                </div>
                {this.state.redirect && (
                    <Redirect to={this.customPath('/patient', this.props.patient._id)} />
                )}
            </Row>
        );
    }
}

export default AppointmentCreate;
