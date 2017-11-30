export default function reducer(state = {
    patients: [],
    users: [],
    appointments: [],
    error: null
}, action) {

    switch (action.type) {
        case "FETCH_ALL_USERS": {
            return {
                ...state
            }
        }
        case "FETCH_ALL_USERS_REJECTED": {
            return {
                ...state,
                error: action.payload
            }
        }
        case "FETCH_ALL_USERS_FULFILLED": {
            return {
                ...state,
                users: action.payload
            }
        }
        case "UPDATE_USER_BY_ID": {
            return {
                ...state
            }
        }
        case "UPDATE_USER_BY_ID_REJECTED": {
            return {
                ...state,
                error: action.payload
            }
        }
        case "UPDATE_USER_BY_ID_FULFILLED": {
            return {
                ...state,
                users: action.payload
            }
        }
        default: {
            return state;
        }
    }
}
