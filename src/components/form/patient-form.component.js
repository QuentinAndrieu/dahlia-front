import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-materialize';

class PatientForm extends Component {

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
                    name="lastname"
                    label="Lastname"
                    component={this.renderField}
                    type="text"
                    placeholder="Lastname"
                />
                <Field
                    name="firstname"
                    label="Firstname"
                    component={this.renderField}
                    type="text"
                    placeholder="Firstname"
                />
                <Field
                    name="birthday"
                    label="Birthday"
                    component={this.renderField}
                    type="date"
                    placeholder="Birthday"
                />
                <Field
                    name="occupation"
                    label="Occupation"
                    component={this.renderField}
                    type="text"
                    placeholder="occupation"
                />
                <Field
                    name="description"
                    label="Description"
                    component={this.renderField}
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