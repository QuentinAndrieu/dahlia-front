import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://dahlia-api.herokuapp.com',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': sessionStorage.getItem('jwtToken')
    }
});

export function addPatient(firstname, lastname, birthday, description, callback) {
    return (dispatch) => {
        dispatch({ type: "ADD_PATIENT" });

        instance.post('/patients', {
            lastname: lastname,
            firstname: firstname,
            birthday: birthday,
            description: description
        }).then((response) => {
            if (response.data.errors) {
                dispatch({ type: "ADD_PATIENT_REJECTED", payload: response.data.errors });
            } else {
                dispatch({ type: "ADD_PATIENT_FULFILLED", payload: response.data });

                if (callback) {
                    callback(response.data._id);
                }
            }
        }).catch((error) => {
            dispatch({ type: "ADD_PATIENT_REJECTED", payload: error });
        });
    }
}

export function updatePatient(idPatient, firstname, lastname, birthday, description, callback) {
    return (dispatch) => {
        dispatch({ type: "UPDATE_PATIENT" });

        instance.put('/patients/' + idPatient, {
            lastname: lastname,
            firstname: firstname,
            birthday: birthday,
            description: description
        }).then((response) => {
            if (response.data.errors) {
                dispatch({ type: "UPDATE_PATIENT_REJECTED", payload: response.data.errors });
            } else {
                dispatch({ type: "UPDATE_PATIENT_FULFILLED", payload: response.data });

                if (callback) {
                    callback(response.data._id);
                }
            }
        }).catch((error) => {
            dispatch({ type: "UPDATE_PATIENT_REJECTED", payload: error });
        });
    }
}