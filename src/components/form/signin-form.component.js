import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-materialize';

class SignInForm extends Component {

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit}>
            <label htmlFor="mail">Mail</label>
                <Field
                    name="mail"
                    component="input"
                    type="email"
                    placeholder="Mail"
                />
                <label htmlFor="password">Password</label>
                <Field
                    name="password"
                    component="input"
                    type="password"
                    placeholder="Password"
                />

                <center>
                    <Button s={12} type="submit">Sign In</Button>
                </center>
            </form>
        );
    }
}


export default reduxForm({
    form: 'signin' 
})(SignInForm)