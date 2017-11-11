import axios from 'axios';


export function fetchUser(jwtToken) {
    return function (dispatch) {

        dispatch({ type: "FETCH_USER" });

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
                dispatch({ type: "FETCH_USER_FULFILLED", payload: response.data })
            })
            .catch((err) => {
                dispatch({ type: "FETCH_USER_REJECTED", payload: err })
            });
    }
}