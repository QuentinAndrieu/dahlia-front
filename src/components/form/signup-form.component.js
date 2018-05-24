import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-materialize';
import FieldService from '../../service/field.service';

class SignUpForm extends Component {

    render() {
        const { handleSubmit, submitting, error } = this.props;
        const field = new FieldService();

        return (
            <form onSubmit={handleSubmit}>
                <Field
                    name="mail"
                    label="Mail"
                    component={field.renderInput}
                    type="email"
                    placeholder="Mail"
                />
                <Field
                    name="password"
                    label="Password"
                    component={field.renderInput}
                    type="password"
                    placeholder="Password"
                />
                <Field
                    name="passwordCopy"
                    label="Password Copy"
                    component={field.renderInput}
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