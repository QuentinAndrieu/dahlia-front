import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://dahlia-api.herokuapp.com',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': sessionStorage.getItem('jwtToken')
    }
});

export function addAppointment(idPatient, description, date, rate, duration, callback) {
    return (dispatch) => {
        dispatch({ type: "ADD_APPOINTMENT" });

        instance.post('/appointments', {
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