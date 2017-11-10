import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://dahlia-api.herokuapp.com',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export function fetchJWTToken(mail, password) {
    console.log(mail, password);
    return function (dispatch) {
        dispatch({ type: "FETCH_JWT_TOKEN" });

        instance.post('/authenticate', {
            mail: mail,
            password: password
        }).then(function (response) {
            sessionStorage.setItem('jwtToken', response.data.token);
            dispatch({ type: "FETCH_JWT_TOKEN_FULFILLED", payload: response.data.token});
        }).catch(function (error) {
            dispatch({ type: "FETCH_JWT_TOKEN_REJECTED", payload: error });
        });
    }
}