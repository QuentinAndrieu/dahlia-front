import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-materialize';
import FieldService from '../../service/field.service';

class SignInForm extends Component {

    render() {
        const { handleSubmit, submitting, error } = this.props;
        const field = new FieldService();

        return (
            <form onSubmit={handleSubmit}>
                <Field
                    name="mail"
                    label="Mail"
                    component={field.renderField}
                    type="email"
                    placeholder="Mail"
                />
                <Field
                    name="password"
                    label="Password"
                    component={field.renderField}
                    type="password"
                    placeholder="Password"
                />
                {error && <strong className="error">{error}</strong>}
                <center>
                    <Button disabled={submitting} s={12} type="submit">Sign In</Button>
                </center>
            </form>
        );
    }
}


export default reduxForm({
    form: 'signin'
})(SignInForm)