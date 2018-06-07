import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Row, Col } from 'react-materialize';
import SelectBoxCustom from '../field/select-custom.component';
import InputCustom from '../field/input-custom.component';

class UserForm extends Component {

    getValuesSelectBoxRates() {
        let numbers = [];

        for (let i = 0; i < 1000; i += 5) {
            numbers.push({ value: i, label: i })
        }

        return numbers;
    }

    getValuesSelectBoxDurations() {
        let numbers = [];

        for (let i = 0; i < 300; i += 5) {
            numbers.push({ value: i, label: i })
        }

        return numbers;
    }

    render() {
        const { handleSubmit, submitting, error } = this.props;

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
                            name="defaultRate"
                            label="Default rate"
                            component={SelectBoxCustom}
                            type="select"
                            values={this.getValuesSelectBoxRates()}
                        />
                    </Col>

                    <Col s={12} m={6} l={6} className="form-field-custom">
                        <Field
                            name="defaultDuration"
                            label="Default duration"
                            component={SelectBoxCustom}
                            type="text"
                            values={this.getValuesSelectBoxDurations()}
                        />
                        {error && <strong className="error">{error}</strong>}
                    </Col>

                    <Col s={12} className="form-field-custom">
                        <Field
                            name="mail"
                            label="Mail"
                            component={InputCustom}
                            type="email"
                            placeholder="Mail"
                        />
                    </Col>

                    <Col s={12}>
                        <Button className="submit-button" disabled={submitting} s={12} type="submit">Edit</Button>
                    </Col>
                </Row>
            </form>
        )
    }
}


export default reduxForm({
    form: 'user'
})(UserForm)