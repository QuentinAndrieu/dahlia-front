import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-materialize';
import FieldService from '../../service/field.service';

class PatientForm extends Component {

    render() {
        const { handleSubmit, submitting, error, pristine } = this.props;
        const field = new FieldService();

        return (
            <form onSubmit={handleSubmit}>
                <Field
                    name="lastname"
                    label="Lastname"
                    component={field.renderField}
                    type="text"
                    placeholder="Lastname"
                />
                <Field
                    name="firstname"
                    label="Firstname"
                    component={field.renderField}
                    type="text"
                    placeholder="Firstname"
                />
                <Field
                    name="birthday"
                    label="Birthday"
                    component={field.renderField}
                    type="date"
                    placeholder="Birthday"
                />
                <Field
                    name="occupation"
                    label="Occupation"
                    component={field.renderField}
                    type="text"
                    placeholder="occupation"
                />
                <Field
                    name="description"
                    label="Description"
                    component={field.renderField}
                    type="text"
                    placeholder="Description"
                    textarea={true}
                />
                {error && <strong className="error">{error}</strong>}
                <center>
                    <Button disabled={pristine || submitting} s={12} type="submit">{this.props.button}</Button>
                </center>
            </form>
        );
    }
}


export default reduxForm({
    form: 'patient'
})(PatientForm)