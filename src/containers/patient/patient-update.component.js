import React, { Component } from 'react';
import PatientForm from '../../components/form/patient-form.container';
import { SubmissionError } from 'redux-form';
import InputValidationService from '../../service/input-validation.service';

class PatientFormUpdate extends Component {

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
            key: 'firstname',
            value: values.firstname
        }, {
            key: 'lastname',
            value: values.lastname
        }, {
            key: 'description',
            value: values.description
        }, {
            key: 'birthday',
            value: values.birthday
        }];

        const required = inputValidationService.required(formatValues);

        if (required) {
            return this.props.updatePatient(this.props.patient._id, values.firstname, values.lastname,
                values.birthday, values.description)
                .then((id) => {
                    window.M.toast({
                        html: 'Patient updated',
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
            <PatientForm onSubmit={this.submit} button="Update" patient={this.props.patient} />
        );
    }
}

export default PatientFormUpdate;
