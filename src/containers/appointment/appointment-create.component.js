import React, { Component } from 'react';
import AppointmentForm from '../../components/form/appointment-form.container';
import { SubmissionError } from 'redux-form';
import InputValidationService from '../../service/input-validation.service';

class AppointmentCreate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            appointment: {
                rate: this.props.user.defaultRate,
                duration: this.props.user.defaultDuration
            }
        }

        this.submit = this.submit.bind(this);
    }

    customPath(path, id) {
        return path + '/' + id;
    }

    submit(values) {
        const inputValidationService = new InputValidationService();

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

        const required = inputValidationService.required(formatValues);

        if (required) {
            return this.props.addAppointment(this.props.patient._id, values.description,
                title, date, values.rate, values.duration)
                .then(() => {
                    window.M.toast({
                        html: 'Appointment created',
                        classes: 'toast-custom',
                        displayLength: 1000
                    });

                    this.props.closeModal();
                }).catch((err) => {
                    throw new SubmissionError({
                        _error: err
                    });
                });
        }
    }

    render() {
        return (
            <AppointmentForm onSubmit={this.submit} appointment={this.state.appointment} button="Submit" />
        );
    }
}

export default AppointmentCreate;
