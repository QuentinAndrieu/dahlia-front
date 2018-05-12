import React, { Component } from 'react';
import UserForm from '../../components/form/user-form.container';
import { SubmissionError } from 'redux-form';
import InputValidationService from '../../service/input-validation.service';

class UserUpdate extends Component {

    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        this.props.setTitle('profile');
    }

    submit(values) {
        const inputValidationService = new InputValidationService();

        const formatValues = [{
            key: 'mail',
            value: values.mail
        }, {
            key: 'firstname',
            value: values.firstname
        }, {
            key: 'lastname',
            value: values.lastname
        }];

        const required = inputValidationService.required(formatValues);

        if (required) {
            const username = values.lastname + ' ' + values.firstname;
            return this.props.updateUser(username, values.lastname, values.firstname,
                values.mail).then((user)=>{
                    window.M.toast({ html: 'User updated', classes: 'toast-green' }, 2000);
                }).catch((err) => {
                    throw new SubmissionError({
                        _error: err
                    });
                })
        }
    }

    render() {
        return (
            <UserForm onSubmit={this.submit} user={this.props.user} />
        );
    }
}

export default UserUpdate;
