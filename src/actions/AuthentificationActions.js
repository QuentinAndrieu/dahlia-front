import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://dahlia-api.herokuapp.com',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export function fetchJWTToken(mail, password, callback) {
    return function (dispatch) {
        dispatch({ type: "FETCH_JWT_TOKEN" });

        instance.post('/authenticate', {
            mail: mail,
            password: password
        }).then(function (response) {
            if (response.data.success) {
                sessionStorage.setItem('jwtToken', response.data.token);
                callback(response.data.token);
                dispatch({ type: "FETCH_JWT_TOKEN_FULFILLED", payload: response.data.token });
            } else {
                dispatch({ type: "FETCH_JWT_TOKEN_REJECTED", payload: 'Authentification failed' });
            }
        }).catch(function (error) {
            dispatch({ type: "FETCH_JWT_TOKEN_REJECTED", payload: error });
        });
    }
}

export function setMail(mail) {
    return {
        type: 'SET_MAIL',
        payload: mail
    }
}


export function setPassword(password) {
    return {
        type: 'SET_PASSWORD',
        payload: password
    }
}