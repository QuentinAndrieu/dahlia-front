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


export function addAppointment(idPatient, description, title, date, rate, duration) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch({ type: 'ADD_APPOINTMENT' });

            getInstance().post('/appointments', {
                id_patient: idPatient,
                description: description,
                title: title,
                date: date,
                rate: rate,
                duration: duration
            }).then((response) => {
                if (response.data.success) {
                    dispatch({ type: 'ADD_APPOINTMENT_FULFILLED', payload: response.data.content });
                    resolve(response.data.content._id);
                }
                else {
                    dispatch({ type: 'ADD_APPOINTMENT_REJECTED', payload: response.data.errors });
                    reject(response.data.errors);
                }
            }).catch((err) => {
                dispatch({ type: 'ADD_APPOINTMENT_REJECTED', payload: err });
                reject(err);
            });
        });
    }
}

export function updateAppointment(idAppointment, description, title, date, rate, duration) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch({ type: 'UPDATE_APPOINTMENT' });

            getInstance().put('/appointments/' + idAppointment, {
                description: description,
                title: title,
                date: date,
                rate: rate,
                duration: duration
            }).then((response) => {
                if (response.data.success) {
                    dispatch({ type: 'UPDATE_APPOINTMENT_FULFILLED', payload: response.data.content });
                    resolve(response.data.content._id);
                }
                else {
                    dispatch({ type: 'UPDATE_APPOINTMENT_REJECTED', payload: response.data.errors });
                    reject(response.data.errors);
                }
            }).catch((err) => {
                dispatch({ type: 'UPDATE_APPOINTMENT_REJECTED', payload: err });
                reject(err);
            });
        });
    }
}

export function removeAppointment(idAppointment) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch({ type: 'REMOVE_APPOINTMENT' });

            getInstance().delete('/appointments/' + idAppointment).then((response) => {
                if (response.data.success) {
                    dispatch({ type: 'REMOVE_APPOINTMENT_FULFILLED', payload: response.data.content });
                    resolve();
                }
                else {
                    dispatch({ type: 'REMOVE_APPOINTMENT_REJECTED', payload: response.data.errors });
                    reject(response.data.errors);
                }
            }).catch((err) => {
                dispatch({ type: 'REMOVE_APPOINTMENT_REJECTED', payload: err });
                reject(err);
            });
        });
    }
}