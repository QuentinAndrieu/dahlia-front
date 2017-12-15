import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-materialize';

class AppointmentForm extends Component {

    renderField({ input, label, textarea, type, meta: { touched, error } }) {
        const errorInput = {
            borderBottom: '2px solid #AA0078'
        }

        const inputField = <input {...input} type={type} style={(touched && error) ? errorInput : {}}
            placeholder={label} />;

        const textareaField = <textarea className="materialize-textarea" {...input} type={type} style={(touched && error) ? errorInput : {}}
            placeholder={label} />;

        return (
            <div>
                <label>{label}</label>
                {textarea ? textareaField : inputField}
            </div>
        )
    }

    render() {
        const { handleSubmit, submitting, error, pristine } = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <Field
                    name="description"
                    label="Description"
                    component={this.renderField}
                    type="text"
                    placeholder="Description"
                    textarea={true}
                />
                <Field
                    name="rate"
                    label="Rate"
                    component={this.renderField}
                    type="text"
                    placeholder="Rate"
                />
                <Field
                    name="duration"
                    label="Duration"
                    component={this.renderField}
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