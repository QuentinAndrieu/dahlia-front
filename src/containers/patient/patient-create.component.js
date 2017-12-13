import React, { Component } from 'react';
import { Row } from 'react-materialize';
import { Redirect, Link } from 'react-router-dom';
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
        this.props.setTitle('Create Patient');
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
            return this.props.addPatient(values.firstname, values.lastname, values.birthday, values.description)
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
            <Row>
                <PatientForm onSubmit={this.submit} button="Submit" />

                <div className="fixed-action-btn">
                    <Link to="/patients" className="btn-floating btn-large">
                        <i className="large material-icons">list</i>
                    </Link>
                </div>
                {this.state.redirect && (
                    <Redirect to={this.customPath('/patient', this.state._id)} />
                )}
            </Row>
        );
    }
}

export default PatientCreate;
