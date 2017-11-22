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
      error: null
}, action) {

      switch (action.type) {
            case "FETCH_USER": {
                  return { ...state, fetching: true }
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
                        user: { patients: [...state.user.patients, action.payload] }
                  }
            }
            case "UPDATE_PATIENT": {
                  return { ...state }
            }
            case "UPDATE_PATIENT_REJECTED": {
                  return { ...state, error: action.payload }
            }
            case "UPDATE_PATIENT_FULFILLED": {
                  const patientsUpdated = state.user.patients.map((patient) => {
                        if (patient._id === action.payload._id) {
                              return action.payload;
                        } else {
                              return patient;
                        }
                  });

                  return {
                        ...state,
                        user: { ...state.user, patients: patientsUpdated }
                  }
            }
            case "REMOVE_PATIENT": {
                  return { ...state }
            }
            case "REMOVE_PATIENT_REJECTED": {
                  return { ...state, error: action.payload }
            }
            case "REMOVE_PATIENT_FULFILLED": {
                  const patientsUpdated = state.user.patients.filter((patient) => {
                        return (patient._id !== action.payload);
                  });

                  return {
                        ...state,
                        user: { ...state.user, patients: patientsUpdated }
                  }
            }
            default: {
                  return state;
            }
      }
}


