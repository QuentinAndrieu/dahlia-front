import axios from 'axios';
import decode from 'jwt-decode';

function getInstance() {
    const instance = axios.create({
        baseURL: 'https://dahlia-api.herokuapp.com',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    return instance;
}

export function fetchJWTToken(mail, password) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch({ type: "FETCH_JWT_TOKEN" });

            getInstance().post('/authenticate', {
                mail: mail,
                password: password
            }).then((response) => {
                if (response.data.success) {
                    sessionStorage.setItem('jwtToken', response.data.token);
                    dispatch({ type: "FETCH_JWT_TOKEN_FULFILLED", payload: response.data.token });
                    resolve(response.data.token);
                } else {
                    dispatch({ type: "FETCH_JWT_TOKEN_REJECTED", payload: response.data.errors });
                    reject(response.data.errors);
                }
            }).catch((err) => {
                dispatch({ type: "FETCH_JWT_TOKEN_REJECTED", payload: err });
                reject(err);
            });
        });

    }
}

export function register(mail, password) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch({ type: "REGISTER" });

            getInstance().post('/register', {
                mail: mail,
                password: password
            }).then((response) => {
                if (response.data.success) {
                    dispatch({ type: "REGISTER_FULFILLED", payload: response.data.user });
                    resolve(response.data.user);
                } else {
                    dispatch({ type: "REGISTER_REJECTED", payload: response.data.errors });
                    reject(response.data.errors);
                }
            }).catch((err) => {
                dispatch({ type: "REGISTER_REJECTED", payload: err });
                reject(err);
            });
        });
    }
}


export function setJWTToken(token) {
    return {
        type: 'SET_TOKEN',
        payload: token
    }
}

export function unauthenticated() {
    return {
        type: 'UNAUTHENTICATED'
    }
}

export function isAuthenticated(token) {
    return (dispatch) => {
        const err = 'User is not authenticated';
        return new Promise((resolve, reject) => {
            if (!token) {
                dispatch({ type: "UNAUTHENTICATED" });
                reject(err);
            }

            try {
                const { exp } = decode(token);

                if (exp < new Date().getTime() / 1000) {
                    dispatch({ type: "UNAUTHENTICATED" });
                    reject(err);
                }
            } catch (e) {
                dispatch({ type: "UNAUTHENTICATED" });
                reject(err);
            }

            dispatch({ type: "AUTHENTICATED" });
            resolve();
        });
    }
}