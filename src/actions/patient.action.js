import axios from 'axios';

function getInstance() {
    const instance = axios.create({
        baseURL: 'https://dahlia-api.herokuapp.com',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': sessionStorage.getItem('jwtToken')
        }
    });

    return instance;
}

export function addPatient(firstname, lastname, birthday, description) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch({ type: "ADD_PATIENT" });

            getInstance().post('/patients', {
                lastname: lastname,
                firstname: firstname,
                birthday: birthday,
                description: description
            }).then((response) => {
                if (response.data.success) {
                    dispatch({ type: "ADD_PATIENT_FULFILLED", payload: response.data.user });
                    resolve(response.data.patient._id);
                } else {
                    dispatch({ type: "ADD_PATIENT_REJECTED", payload: response.data.errors });
                    reject(response.data.errors);
                }
            }).catch((err) => {
                dispatch({ type: "ADD_PATIENT_REJECTED", payload: err });
                reject(err);
            });
        });
    }
}

export function updatePatient(idPatient, firstname, lastname, birthday, description) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch({ type: "UPDATE_PATIENT" });

            getInstance().put('/patients/' + idPatient, {
                lastname: lastname,
                firstname: firstname,
                birthday: birthday,
                description: description
            }).then((response) => {
                if (response.data.success) {
                    dispatch({ type: "UPDATE_PATIENT_FULFILLED", payload: response.data.user });
                    resolve(response.data.patient._id);
                } else {
                    dispatch({ type: "UPDATE_PATIENT_REJECTED", payload: response.data.errors });
                    reject(response.data.errors);
                }
            }).catch((err) => {
                dispatch({ type: "UPDATE_PATIENT_REJECTED", payload: err });
                reject(err);
            });
        });

    }
}

export function updateToTrashPatient(idPatient) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch({ type: "UPDATE_TO_TRASH_PATIENT" });

            getInstance().delete('/patients/' + idPatient).then((response) => {
                if (response.data.success) {
                    dispatch({ type: "UPDATE_TO_TRASH_PATIENT_FULFILLED", payload: response.data.user });
                    resolve(response.data.patient);
                } else {
                    dispatch({ type: "UPDATE_TO_TRASH_PATIENT_REJECTED", payload: response.data.errors });
                    reject(response.data.errors);
                }
            }).catch((err) => {
                dispatch({ type: "UPDATE_TO_TRASH_PATIENT_REJECTED", payload: err });
                reject(err);
            });
        });
    }
}