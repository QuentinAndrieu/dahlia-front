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

export function fetchJWTToken(mail, password, callback) {
    return (dispatch) => {
        dispatch({ type: "FETCH_JWT_TOKEN" });

        getInstance().post('/authenticate', {
            mail: mail,
            password: password
        }).then((response) => {
            if (response.data.success) {
                sessionStorage.setItem('jwtToken', response.data.token);
                dispatch({ type: "FETCH_JWT_TOKEN_FULFILLED", payload: response.data.token });

                if (callback) {
                    callback(response.data.token);
                }
            } else {
                dispatch({ type: "FETCH_JWT_TOKEN_REJECTED", payload: 'Authentification failed' });
            }
        }).catch((error) => {
            dispatch({ type: "FETCH_JWT_TOKEN_REJECTED", payload: error });
        });
    }
}

export function setJWTToken(token) {
    return {
        type: 'SET_TOKEN',
        payload: token
    }
}

export function isAuthenticated(token, callbackAuth, callbackUnAuth) {
    return (dispatch) => {
        if (!token) {
            if (callbackUnAuth) callbackUnAuth();
            dispatch({ type: "UNAUTHENTICATED" });
            return false;
        }

        try {
            const { exp } = decode(token);

            if (exp < new Date().getTime() / 1000) {
                if (callbackUnAuth) callbackUnAuth();
                dispatch({ type: "UNAUTHENTICATED" });
                return false;
            }
        } catch (e) {
            if (callbackUnAuth) callbackUnAuth();
            dispatch({ type: "UNAUTHENTICATED" });
            return false;
        }

        dispatch({ type: "AUTHENTICATED" });

        if (callbackAuth) callbackAuth();
        return true;
    }
}