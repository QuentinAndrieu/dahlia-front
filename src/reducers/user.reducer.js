export default function reducer(state = {
      user: {
            username: '',
            firstname: '',
            lastname: '',
            mail: '',
            password: '',
            setting: {
                  durations: [],
                  rates: []
            },
            role: '',
            patients: [],
            appointments: []
      },
      fetching: false,
      fetched: false,
      error: null
}, action) {

      switch (action.type) {
            case "FETCH_USER": {
                  return {
                        ...state,
                        fetching: true
                  }
            }
            case "FETCH_USER_REJECTED": {
                  return {
                        ...state,
                        fetching: false,
                        error: action.payload
                  }
            }
            case "FETCH_USER_FULFILLED": {
                  return {
                        ...state,
                        fetching: false,
                        fetched: true,
                        user: action.payload
                  }
            }
            case "REGISTER": {
                  return {
                        ...state
                  }
            }
            case "REGISTER_REJECTED": {
                  return {
                        ...state,
                        error: action.payload
                  }
            }
            case "REGISTER_FULFILLED": {
                  return {
                        ...state,
                        user: action.payload
                  }
            }
            case "UPDATE_USER": {
                  return {
                        ...state
                  }
            }
            case "UPDATE_USER_REJECTED": {
                  return {
                        ...state,
                        error: action.payload
                  }
            }
            case "UPDATE_USER_FULFILLED": {
                  return {
                        ...state,
                        user: action.payload
                  }
            }
            case "ADD_PATIENT": {
                  return { ...state }
            }
            case "ADD_PATIENT_REJECTED": {
                  return { ...state, error: action.payload }
            }
            case "ADD_PATIENT_FULFILLED": {
                  return {
                        ...state,
                        user: action.payload
                  }
            }
            case "UPDATE_PATIENT": {
                  return { ...state }
            }
            case "UPDATE_PATIENT_REJECTED": {
                  return { ...state, error: action.payload }
            }
            case "UPDATE_PATIENT_FULFILLED": {

                  return {
                        ...state,
                        user: action.payload
                  }
            }
            case "UPDATE_TO_TRASH_PATIENT": {
                  return { ...state }
            }
            case "UPDATE_TO_TRASH_PATIENT_REJECTED": {
                  return {
                        ...state,
                        error: action.payload
                  }
            }
            case "UPDATE_TO_TRASH_PATIENT_FULFILLED": {
                  return {
                        ...state,
                        user: action.payload
                  }
            }
            case "ADD_APPOINTMENT": {
                  return { ...state }
            }
            case "ADD_APPOINTMENT_REJECTED": {
                  return { ...state, error: action.payload }
            }
            case "ADD_APPOINTMENT_FULFILLED": {
                  return {
                        ...state,
                        user: action.payload
                  }
            }
            case "UPDATE_APPOINTMENT": {
                  return { ...state }
            }
            case "UPDATE_APPOINTMENT_REJECTED": {
                  return { ...state, error: action.payload }
            }
            case "UPDATE_APPOINTMENT_FULFILLED": {
                  return {
                        ...state,
                        user: action.payload
                  }
            }
            case "UPDATE_TO_TRASH_APPOINTMENT": {
                  return { ...state }
            }
            case "UPDATE_TO_TRASH_APPOINTMENT_REJECTED": {
                  return {
                        ...state,
                        error: action.payload
                  }
            }
            case "UPDATE_TO_TRASH_APPOINTMENT_FULFILLED": {
                  return {
                        ...state,
                        user: action.payload
                  }
            }
            default: {
                  return state;
            }
      }
}


