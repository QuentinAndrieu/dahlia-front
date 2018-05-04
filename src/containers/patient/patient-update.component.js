import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PatientForm from '../../components/form/patient-form.container';
import { SubmissionError } from 'redux-form';
import InputValidation from '../../service/input-validation.service';

class PatientFormUpdate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        };

        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        this.props.setTitle('patient-update');
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
        }];

        const required = inputValidation.required(formatValues);

        if (required) {
            return this.props.updatePatient(this.props.patient._id, values.firstname, values.lastname,
                values.birthday, values.description)
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
                <PatientForm onSubmit={this.submit} button="Update" patient={this.props.patient} />
                {this.state.redirect && (
                    <Redirect to={this.customPath('/patient', this.props.patient._id)} />
                )}
            </div>
        );
    }
}

export default PatientFormUpdate;
