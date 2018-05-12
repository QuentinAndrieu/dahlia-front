import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AppointmentForm from '../../components/form/appointment-form.container';
import { SubmissionError } from 'redux-form';
import InputValidationService from '../../service/input-validation.service';

class AppointmentCreate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        };

        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        this.props.setTitle('add-appointment');
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
                    this.setState({
                        redirect: true
                    });
                    window.M.toast({ html: 'Appointment created', classes: 'toast-green' }, 2000);
                }).catch((err) => {
                    throw new SubmissionError({
                        _error: err
                    });
                });
        }
    }

    render() {
        return (
            <div>
                <AppointmentForm onSubmit={this.submit} button="Submit" />
                {this.state.redirect && (
                    <Redirect to={this.customPath('/patient', this.props.patient._id)} />
                )}
            </div>
        );
    }
}

export default AppointmentCreate;
