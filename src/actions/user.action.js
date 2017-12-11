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

export function fetchUser(jwtToken) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch({ type: 'FETCH_USER' });

            getInstance(jwtToken).get('/user')
                .then((response) => {
                    if (response.data.success) {
                        dispatch({ type: "FETCH_USER_FULFILLED", payload: response.data.content });
                        resolve(response.data.content);
                    } else {
                        dispatch({ type: "FETCH_USER_REJECTED", payload: response.data.errors });
                        resolve(response.data.errors);
                    }
                })
                .catch((err) => {
                    dispatch({ type: 'FETCH_USER_REJECTED', payload: err });
                    reject(err);
                });
        });
    }
}

export function updateUser(username, lastname, firstname, mail) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch({ type: 'UPDATE_USER' });

            getInstance(sessionStorage.getItem('jwtToken')).put('/user', {
                username: username,
                lastname: lastname,
                firstname: firstname,
                mail: mail
            }).then((response) => {
                if (response.data.success) {
                    dispatch({ type: "UPDATE_USER_FULFILLED", payload: response.data.content });
                    resolve();
                } else {
                    dispatch({ type: "UPDATE_USER_REJECTED", payload: response.data.errors });
                    reject(response.data.errors);
                }
            }).catch((err) => {
                dispatch({ type: 'UPDATE_USER_REJECTED', payload: err });
                reject(err);
            });
        });
    }
}