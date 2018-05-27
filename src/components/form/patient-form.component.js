import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Row, Col } from 'react-materialize';
import InputCustom from '../field/input-custom.component';
import TextareaCustom from '../field/textarea-custom.component';

class PatientForm extends Component {

    render() {
        const { handleSubmit, submitting, error, pristine } = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col s={12} m={6} l={6} className="form-field-custom">
                        <Field
                            name="firstname"
                            label="Firstname"
                            component={InputCustom}
                            type="text"
                            placeholder="Firstname"
                        />
                    </Col>

                    <Col s={12} m={6} l={6} className="form-field-custom">
                        <Field
                            name="lastname"
                            label="Lastname"
                            component={InputCustom}
                            type="text"
                            placeholder="Lastname"
                        />
                    </Col>

                    <Col s={12} m={6} l={6} className="form-field-custom">
                        <Field
                            name="birthday"
                            label="Birthday"
                            component={InputCustom}
                            type="date"
                            placeholder="Birthday"
                        />
                    </Col>

                    <Col s={12} m={6} l={6} className="form-field-custom">
                        <Field
                            name="occupation"
                            label="Occupation"
                            component={InputCustom}
                            type="text"
                            placeholder="occupation"
                        />
                    </Col>

                    <Col s={12} className="form-field-custom">
                        <Field
                            name="description"
                            label="Description"
                            component={TextareaCustom}
                            type="textarea"
                            placeholder="Description"
                            textarea={true}
                        />
                        {error && <strong className="error">{error}</strong>}
                    </Col>

                    <Col s={12} className="form-field-custom">
                        <center>
                            <Button className="submit-button" disabled={pristine || submitting} s={12} type="submit">{this.props.button}</Button>
                        </center>
                    </Col>
                </Row>
            </form>
        )
    }
}


export default reduxForm({
    form: 'patient'
})(PatientForm)