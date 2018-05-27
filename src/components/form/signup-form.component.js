import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Col, Row } from 'react-materialize';
import InputCustom from '../field/input-custom.component';

class SignUpForm extends Component {
    
    render() {
        const { handleSubmit, submitting, error } = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col s={12} className="form-field-custom">
                        <Field
                            name="mail"
                            label="Mail"
                            component={InputCustom}
                            type="email"
                            placeholder="Mail"
                        />
                    </Col>

                    <Col s={12} className="form-field-custom">
                        <Field
                            name="password"
                            label="Password"
                            component={InputCustom}
                            type="password"
                            placeholder="Password"
                        />
                    </Col>

                    <Col s={12} className="form-field-custom">
                        <Field
                            name="passwordCopy"
                            label="Password Copy"
                            component={InputCustom}
                            type="password"
                            placeholder="Password"
                        />
                        {error && <strong className="error">{error}</strong>}
                    </Col>

                    <Col s={12} className="form-field-custom">
                        <center>
                            <Button className="submit-button" disabled={submitting} s={12} type="submit">Sign Up</Button>
                        </center>
                    </Col>
                </Row>
            </form>
        )
    }
}


export default reduxForm({
    form: 'signup'
})(SignUpForm)