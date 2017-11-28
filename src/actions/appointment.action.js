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


export function addAppointment(idPatient, description, date, rate, duration, callback) {
    return (dispatch) => {
        dispatch({ type: "ADD_APPOINTMENT" });

        getInstance().post('/appointments', {
            id_patient: idPatient,
            description: description,
            date: date,
            rate: rate,
            duration: duration
        }).then((response) => {
            if (response.data.errors) {
                dispatch({ type: "ADD_APPOINTMENT_REJECTED", payload: response.data.errors });
            } else {
                dispatch({ type: "ADD_APPOINTMENT_FULFILLED", payload: response.data });

                if (callback) {
                    callback(response.data._id);
                }
            }
        }).catch((error) => {
            dispatch({ type: "ADD_APPOINTMENT_REJECTED", payload: error });
        });
    }
}

export function updateAppointment(idAppointment, description, date, rate, duration, callback) {
    return (dispatch) => {
        dispatch({ type: "UPDATE_APPOINTMENT" });

        getInstance().put('/appointments/' + idAppointment, {
            description: description,
            date: date,
            rate: rate,
            duration: duration
        }).then((response) => {
            if (response.data.errors) {
                dispatch({ type: "UPDATE_APPOINTMENT_REJECTED", payload: response.data.errors });
            } else {
                dispatch({ type: "UPDATE_APPOINTMENT_FULFILLED", payload: response.data });

                if (callback) {
                    callback(response.data._id);
                }
            }
        }).catch((error) => {
            dispatch({ type: "UPDATE_APPOINTMENT_REJECTED", payload: error });
        });
    }
}