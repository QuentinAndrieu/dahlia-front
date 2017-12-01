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
                sessionStorage.setItem('jwtToken', response.data.content.token);

                if (callback)
                    callback(response.data.content.token);

                dispatch({ type: "FETCH_JWT_TOKEN_FULFILLED", payload: response.data.content.token });
            } else {
                dispatch({ type: "FETCH_JWT_TOKEN_REJECTED", payload: response.data.errors });
            }
        }).catch((error) => {
            dispatch({ type: "FETCH_JWT_TOKEN_REJECTED", payload: error });
        });
    }
}

export function register(mail, password, callback) {
    return (dispatch) => {
        dispatch({ type: "REGISTER" });

        getInstance().post('/register', {
            mail: mail,
            password: password
        }).then((response) => {
            if (response.data.success) {
                dispatch({ type: "REGISTER_FULFILLED", payload: response.data.content });

                if (callback)
                    callback();
            } else {
                dispatch({ type: "REGISTER_REJECTED", payload: response.data.errors });
            }
        }).catch((error) => {
            dispatch({ type: "REGISTER_REJECTED", payload: error });
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
            dispatch({ type: "UNAUTHENTICATED" });
            if (callbackUnAuth) callbackUnAuth();
            return false;
        }

        try {
            const { exp } = decode(token);

            if (exp < new Date().getTime() / 1000) {
                dispatch({ type: "UNAUTHENTICATED" });
                if (callbackUnAuth) callbackUnAuth();
                return false;
            }
        } catch (e) {
            dispatch({ type: "UNAUTHENTICATED" });
            if (callbackUnAuth) callbackUnAuth();
            return false;
        }

        dispatch({ type: "AUTHENTICATED" });

        if (callbackAuth) callbackAuth();
        return true;
    }
}