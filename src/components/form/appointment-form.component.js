import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Row, Col } from 'react-materialize';
import TextareaCustom from '../field/textarea-custom.component';
import InputCustom from '../field/input-custom.component';

class AppointmentForm extends Component {

    render() {
        const { handleSubmit, submitting, error, pristine } = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col s={12} className="form-field-custom">
                        <Field
                            name="description"
                            label="Description"
                            component={TextareaCustom}
                            type="text"
                            placeholder="Description"
                            textarea={true}
                        />
                    </Col>

                    <Col s={12} m={6} l={6} className="form-field-custom">
                        <Field
                            name="rate"
                            label="Rate"
                            component={InputCustom}
                            type="text"
                            placeholder="Rate"
                        />
                    </Col>

                    <Col s={12} m={6} l={6} className="form-field-custom">
                        <Field
                            name="duration"
                            label="Duration"
                            component={InputCustom}
                            type="text"
                            placeholder="Duration"
                        />
                        {error && <strong className="error">{error}</strong>}
                    </Col>

                    <Col s={12} className="form-field-custom">
                        <Button className="submit-button" disabled={pristine || submitting} s={12} type="submit">{this.props.button}</Button>
                    </Col>
                </Row>
            </form>
        )
    }
}


export default reduxForm({
    form: 'appointment'
})(AppointmentForm)