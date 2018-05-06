import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PatientForm from '../../components/form/patient-form.container';
import { SubmissionError } from 'redux-form';
import InputValidation from '../../service/input-validation.service';

class PatientCreate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        }

        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        this.props.setTitle('create-patient');
    }

    customPath(path, id) {
        return path + '/' + id;
    }

    submit(values) {
        const inputValidation = new InputValidation();

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
        }, {
            key: 'occupation',
            value: values.occupation
        }];

        const required = inputValidation.required(formatValues);

        if (required) {
            return this.props.addPatient(values.firstname, values.lastname, values.birthday, values.description, values.occupation)
                .then((id) => {
                    this.setState({
                        _id: id,
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
                <PatientForm onSubmit={this.submit} button="Submit" />

                {this.state.redirect && (
                    <Redirect to={this.customPath('/patient', this.state._id)} />
                )}
            </div>
        );
    }
}

export default PatientCreate;
