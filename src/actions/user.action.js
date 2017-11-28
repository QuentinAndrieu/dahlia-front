import axios from 'axios';

function getInstance(token) {
    const instance = axios.create({
        baseURL: 'https://dahlia-api.herokuapp.com',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token
        }
    });

    return instance;
}

export function fetchUser(jwtToken, callback) {
    return (dispatch) => {
        dispatch({ type: 'FETCH_USER' });

        getInstance(jwtToken).get('/user')
            .then((response) => {
                dispatch({ type: 'FETCH_USER_FULFILLED', payload: response.data });

                if (callback) {
                    callback();
                }
            })
            .catch((err) => {
                dispatch({ type: 'FETCH_USER_REJECTED', payload: err })
            });
    }
}


export function updateUser(username, lastname, firstname, mail) {
    return (dispatch) => {
        dispatch({ type: 'UPDATE_USER' });

        getInstance(sessionStorage.getItem('jwtToken')).put('/user', {
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
        }).catch((err) => {
            dispatch({ type: 'UPDATE_USER_REJECTED', payload: err })
        });
    }
}