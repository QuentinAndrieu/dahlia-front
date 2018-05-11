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
                    dispatch({ type: 'ADD_APPOINTMENT_FULFILLED', payload: response.data.user });
                    resolve(response.data.appointment._id);
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

export function updateAppointment(idAppointment, description, title, rate, duration, date) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch({ type: 'UPDATE_APPOINTMENT' });

            getInstance().put('/appointments/' + idAppointment, {
                description: description,
                title: title,
                rate: rate,
                duration: duration,
                date: date,
            }).then((response) => {
                if (response.data.success) {
                    dispatch({ type: 'UPDATE_APPOINTMENT_FULFILLED', payload: response.data.user });
                    resolve(response.data.appointment._id);
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

export function updateToTrashAppointment(idAppointment) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch({ type: 'UPDATE_TO_TRASH_APPOINTMENT' });

            getInstance().delete('/appointments/' + idAppointment).then((response) => {
                if (response.data.success) {
                    dispatch({ type: 'UPDATE_TO_TRASH_APPOINTMENT_FULFILLED', payload: response.data.user });
                    resolve();
                }
                else {
                    dispatch({ type: 'UPDATE_TO_TRASH_APPOINTMENT_REJECTED', payload: response.data.errors });
                    reject(response.data.errors);
                }
            }).catch((err) => {
                dispatch({ type: 'UPDATE_TO_TRASH_APPOINTMENT_REJECTED', payload: err });
                reject(err);
            });
        });
    }
}