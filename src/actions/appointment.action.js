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


export function addAppointment(idPatient, description, title, date, rate, duration, callback) {
    return (dispatch) => {
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

                if (callback)
                    callback(response.data.content._id);
            }
            else {
                dispatch({ type: 'ADD_APPOINTMENT_REJECTED', payload: response.data.errors });
            }
        }).catch((error) => {
            dispatch({ type: 'ADD_APPOINTMENT_REJECTED', payload: error });
        });
    }
}

export function updateAppointment(idAppointment, description, title, date, rate, duration, callback) {
    return (dispatch) => {
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

                if (callback)
                    callback(response.data.content._id);
            }
            else {
                dispatch({ type: 'UPDATE_APPOINTMENT_REJECTED', payload: response.data.errors });
            }
        }).catch((error) => {
            dispatch({ type: 'UPDATE_APPOINTMENT_REJECTED', payload: error });
        });
    }
}

export function removeAppointment(idAppointment, callback) {
    return (dispatch) => {
        dispatch({ type: 'REMOVE_APPOINTMENT' });

        getInstance().delete('/appointments/' + idAppointment).then((response) => {
            if (response.data.success) {
                dispatch({ type: 'REMOVE_APPOINTMENT_FULFILLED', payload: response.data.content });

                if (callback)
                    callback();
            }
            else {
                dispatch({ type: 'REMOVE_APPOINTMENT_REJECTED', payload: response.data.errors });
            }
        }).catch((error) => {
            dispatch({ type: 'REMOVE_APPOINTMENT_REJECTED', payload: error });
        });
    }
}