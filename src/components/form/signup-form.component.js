import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-materialize';

class SignUpForm extends Component {

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
                    name="mail"
                    label="Mail"
                    component={renderField}
                    type="email"
                    placeholder="Mail"
                />
                <Field
                    name="password"
                    label="Password"
                    component={renderField}
                    type="password"
                    placeholder="Password"
                />
                <Field
                    name="passwordCopy"
                    label="Password Copy"
                    component={renderField}
                    type="password"
                    placeholder="Password"
                />
                {error && <strong className="error">{error}</strong>}
                <center>
                    <Button disabled={submitting} s={12} type="submit">Sign Up</Button>
                </center>
            </form>
        );
    }
}


export default reduxForm({
    form: 'signup'
})(SignUpForm)