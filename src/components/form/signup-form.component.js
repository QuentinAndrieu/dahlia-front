import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-materialize';

class SignUpForm extends Component {

    renderField({ input, label, type, meta: { touched, error } }) {
        const errorInput = {
            borderBottom: '2px solid #AA0078'
        }

        return (
            <div>
                <label>{label}</label>
                <div>
                    <input {...input} type={type} style={(touched && error) ? errorInput : {}} placeholder={label} />
                </div>
            </div>
        )
    }

    render() {
        const { handleSubmit, submitting, error } = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <Field
                    name="mail"
                    label="Mail"
                    component={this.renderField}
                    type="email"
                    placeholder="Mail"
                />
                <Field
                    name="password"
                    label="Password"
                    component={this.renderField}
                    type="password"
                    placeholder="Password"
                />
                <Field
                    name="passwordCopy"
                    label="Password Copy"
                    component={this.renderField}
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