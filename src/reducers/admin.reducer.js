export default function reducer(state = {
    users: [],
    error: null,
    patients: [],
    appointments: []
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
        case "FETCH_ALL_PATIENTS": {
            return {
                ...state
            }
        }
        case "FETCH_ALL_PATIENTS_REJECTED": {
            return {
                ...state,
                error: action.payload
            }
        }
        case "FETCH_ALL_PATIENTS_FULFILLED": {
            return {
                ...state,
                patients: action.payload
            }
        }
        case "FETCH_ALL_APPOINTMENTS": {
            return {
                ...state
            }
        }
        case "FETCH_ALL_APPOINTMENTS_REJECTED": {
            return {
                ...state,
                error: action.payload
            }
        }
        case "FETCH_ALL_APPOINTMENTS_FULFILLED": {
            return {
                ...state,
                appointments: action.payload
            }
        }
        default: {
            return state;
        }
    }
}
