import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://dahlia-api.herokuapp.com',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': sessionStorage.getItem('jwtToken')
    }
});

export function addPatient(firstname, lastname, birthday, description) {
    return function (dispatch) {
        dispatch({ type: "ADD_PATIENT" });

        instance.post('/patients', {
            lastname: firstname,
            firstname: lastname,
            birthday: birthday,
            description: description
        }).then(function (response) {
            if (response.data.success) {
                dispatch({ type: "ADD_PATIENT_FULFILLED", payload: response.data });
            } else {
                dispatch({ type: "ADD_PATIENT_REJECTED", payload: 'Missing properties' });
            }
        }).catch(function (error) {
            dispatch({ type: "ADD_PATIENT_REJECTED", payload: error });
        });
    }
}