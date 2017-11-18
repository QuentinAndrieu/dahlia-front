import axios from 'axios';

export function fetchUser(jwtToken) {
    return function (dispatch) {

        dispatch({ type: 'FETCH_USER' });

        const instance = axios.create({
            baseURL: 'https://dahlia-api.herokuapp.com',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': jwtToken
            }
        });

        instance.get('/user')
            .then((response) => {
                dispatch({ type: 'FETCH_USER_FULFILLED', payload: response.data })
            })
            .catch((err) => {
                dispatch({ type: 'FETCH_USER_REJECTED', payload: err })
            });
    }
}


export function updateUser(username, lastname, firstname, mail) {
    return function (dispatch) {

        dispatch({ type: 'UPDATE_USER' });

        const instance = axios.create({
            baseURL: 'https://dahlia-api.herokuapp.com',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem('jwtToken')
            }
        });

        instance.put('/user', {
            username: username,
            lastname: lastname,
            firstname: firstname,
            mail: mail
        }).then((response) => {
            if (response.data.success) {
                dispatch({ type: "UPDATE_USER_FULFILLED", payload: response.data });
            } else {
                dispatch({ type: "UPDATE_USER_REJECTED", payload: 'Missing properties' });
            }
            dispatch({ type: 'UPDATE_USER_FULFILLED', payload: response.data })
        }).catch((err) => {
            dispatch({ type: 'UPDATE_USER_REJECTED', payload: err })
        });
    }
}