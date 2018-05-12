import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-materialize';
import FieldService from '../../service/field.service';

class AppointmentForm extends Component {

    render() {
        const { handleSubmit, submitting, error, pristine } = this.props;
        const field = new FieldService();

        return (
            <form onSubmit={handleSubmit}>
                <Field
                    name="description"
                    label="Description"
                    component={field.renderTextarea}
                    type="text"
                    placeholder="Description"
                    textarea={true}
                />
                <Field
                    name="rate"
                    label="Rate"
                    component={field.renderInput}
                    type="text"
                    placeholder="Rate"
                />
                <Field
                    name="duration"
                    label="Duration"
                    component={field.renderInput}
                    type="text"
                    placeholder="Duration"
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
    form: 'appointment'
})(AppointmentForm)