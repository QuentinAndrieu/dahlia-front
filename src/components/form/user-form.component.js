import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-materialize';

class UserForm extends Component {

    render() {
        const { handleSubmit, submitting, error } = this.props;

        const errorInput = {
            borderBottom: '2px solid #AA0078'
        }

        const renderField = ({ input, label, type, meta: { touched, error } }) => (
            <div>
                <label>{label}</label>
                <div>
                    <input {...input} type={type} style={(touched && error) ? errorInput : {}} placeholder={label} />
                </div>
            </div>
        )

        return (
            <form onSubmit={handleSubmit}>
                <Field
                    name="lastname"
                    label="Lastname"
                    component={renderField}
                    type="text"
                    placeholder="Lastname"
                />
                <Field
                    name="firstname"
                    label="Firstname"
                    component={renderField}
                    type="text"
                    placeholder="Firstname"
                />
                <Field
                    name="mail"
                    label="Mail"
                    component={renderField}
                    type="email"
                    placeholder="Mail"
                />
                {error && <strong className="error">{error}</strong>}
                <center>
                    <Button disabled={submitting} s={12} type="submit">Update</Button>
                </center>
            </form>
        );
    }
}


export default reduxForm({
    form: 'signup'
})(UserForm)