export default function reducer(state = {
      user: {
            username: '',
            firstname: '',
            lastname: '',
            mail: '',
            password: [],
            setting: {
                  durations: [],
                  rates: []
            },
            role: '',
            patients: []
      },
      fetching: false,
      fetched: false,
      hasFetch: false,
      error: null
}, action) {

      switch (action.type) {
            case "FETCH_USER": {
                  return { ...state, fetching: true, hasFetch: true }
            }
            case "FETCH_USER_REJECTED": {
                  return { ...state, fetching: false, error: action.payload }
            }
            case "FETCH_USER_FULFILLED": {
                  return {
                        ...state,
                        fetching: false,
                        fetched: true,
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
                        user: {
                              patients: [...state.user.patients, action.payload]
                        }
                  }
            }
            default: {
                  return state;
            }
      }

      return state;
}


