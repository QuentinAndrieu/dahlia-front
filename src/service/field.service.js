import React from 'react';

class FieldService {

    renderField({ input, label, textarea, type, meta: { touched, error } }) {
        const errorInput = {
            borderBottom: '2px solid #FF0000'
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

}

export default FieldService;