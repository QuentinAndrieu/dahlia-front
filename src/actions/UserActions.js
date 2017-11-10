import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://dahlia-api.herokuapp.com',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authentification': sessionStorage.getItem('jwtToken')
    }
});

export function fetchUser() {
    return function (dispatch) {
        dispatch({ type: "FETCH_USER" });

        instance.get('/user')
            .then((response) => {
                dispatch({ type: "FETCH_USER_FULFILLED", payload: response.data })
            })
            .catch((err) => {
                dispatch({ type: "FETCH_USER_REJECTED", payload: err })
            });
    }
}