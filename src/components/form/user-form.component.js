import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-materialize';
import FieldService from '../../service/field.service';

class UserForm extends Component {

    render() {
        const { handleSubmit, submitting, error } = this.props;
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
                    name="mail"
                    label="Mail"
                    component={field.renderField}
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