import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-materialize';

class UserForm extends Component {

    renderField({ input, label, type, meta: { touched, error } }) {
        const errorInput = {
            borderBottom: '2px solid #AA0078'
        }

        return (
            <div>
                <label>{label}</label>
                <div>
                    <input {...input} type={type} style={(touched && error) ? errorInput : {}} placeholder={label} />
                </div>
            </div>
        )
    }

    render() {
        const { handleSubmit, submitting, error } = this.props;

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
                    name="mail"
                    label="Mail"
                    component={this.renderField}
                    type="email"
                    placeholder="Mail"
                />
                {error && <strong className="error">{error}</strong>}
                <center>
                    <Button disabled={submitting} s={12} type="submit">Update</Button>
                </center>
            </form>
        );
    }
}


export default reduxForm({
    form: 'user'
})(UserForm)