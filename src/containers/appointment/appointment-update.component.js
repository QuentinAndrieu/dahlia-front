import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AppointmentForm from '../../components/form/appointment-form.container';
import { SubmissionError } from 'redux-form';
import InputValidationService from '../../service/input-validation.service';

class AppointmentUpdate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        };

        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        this.props.setTitle('edit-appointment');
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
                values.title, values.rate, values.duration)
                .then((id) => {
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
            <div>
                <AppointmentForm onSubmit={this.submit} button="Update" appointment={this.props.appointment} />

                {this.state.redirect && (
                    <Redirect to={this.customPath('/patient', this.props.appointment.id_patient)} />
                )}
            </div>
        );
    }
}

export default AppointmentUpdate;
