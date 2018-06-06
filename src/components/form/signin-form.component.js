import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Row, Col } from 'react-materialize';
import InputCustom from '../field/input-custom.component';

class SignInForm extends Component {

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
                        {error && <strong className="error">{error}</strong>}
                    </Col>

                    <Col s={12} className="form-field-custom">
                        <Button className="submit-button" disabled={submitting} s={12} type="submit">Sign In</Button>
                    </Col>
                </Row>
            </form>
        )
    }
}


export default reduxForm({
    form: 'signin'
})(SignInForm)