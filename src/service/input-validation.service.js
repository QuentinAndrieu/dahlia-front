import { SubmissionError } from 'redux-form';

class InputValidationService {

    required(inputs) {
        let errors = {};
        let isError = false;

        inputs.forEach(input => {
            if (!input.value || input.value.toString().trim() === '') {
                isError = true;
                errors[input.key] = 'Required ' + input.key
            }
        });

        if (isError) {
            throw new SubmissionError(
                {
                    ...errors,
                    _error: 'Required input missing'
                });
        }

        return !isError;
    }

    comparePassword(password, copy) {
        let errors = {};
        let isError = (password !== copy) ? true : false;

        if (isError) {
            throw new SubmissionError(
                {
                    ...errors,
                    _error: 'Passwords are differents'
                });
        }

        return !isError;
    }
}

export default InputValidationService;