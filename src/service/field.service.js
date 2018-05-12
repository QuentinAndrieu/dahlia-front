import React from 'react';

const errorInput = {
    borderBottom: '2px solid #FF0000'
}

class FieldService {

    renderInput({ input, label, type, meta: { touched, error } }) {
        return (
            <div>
                <label>{label}</label>
                <input {...input}
                    type={type}
                    style={(touched && error) ? errorInput : {}}
                    placeholder={label} />
            </div>
        )
    }

    renderTextarea({ input, label, type, meta: { touched, error } }) {
        return (
            <div>
                <label>{label}</label>
                <textarea
                    {...input}
                    className="materialize-textarea"
                    type={type}
                    style={(touched && error) ? errorInput : {}}
                    placeholder={label} />
            </div>
        )
    }
}

export default FieldService;