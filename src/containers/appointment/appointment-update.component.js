import React, { Component } from 'react';
import AppointmentForm from '../../components/form/appointment-form.container';
import { SubmissionError } from 'redux-form';
import InputValidationService from '../../service/input-validation.service';

class AppointmentUpdate extends Component {

    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);
    }

    customPath(path, id) {
        return path + '/' + id;
    }

    submit(values) {
        const inputValidationService = new InputValidationService();

        const formatValues = [{
            key: 'description',
            value: values.description
        }, {
            key: 'duration',
            value: values.duration.toString()
        }, {
            key: 'rate',
            value: values.rate.toString()
        }];

        const required = inputValidationService.required(formatValues);

        if (required) {
            return this.props.updateAppointment(this.props.appointment._id, values.description,
                values.title, values.rate, values.duration, this.props.appointment.date)
                .then((id) => {
                    window.M.toast({
                        html: 'Appoinment updated',
                        classes: 'toast-custom',
                        displayLength: 1000
                    });

                    this.props.closeModal();
                })
                .catch((err) => {
                    throw new SubmissionError({
                        _error: err
                    });
                });
        }
    }

    render() {
        return (
            <AppointmentForm onSubmit={this.submit} button="Update" appointment={this.props.appointment} />
        );
    }
}

export default AppointmentUpdate;
