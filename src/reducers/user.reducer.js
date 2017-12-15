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
                        user: Object.assign({},
                              state.user,
                              action.payload,
                              {
                                    appointments: state.user.appointments,
                                    patients: state.user.patients
                              })
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
                              ...state.user,
                              patients: [...state.user.patients, action.payload]
                        }
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
                              return Object.assign({},
                                    patient,
                                    action.payload,
                                    {
                                          appointments: patient.appointments
                                    });
                        } else {
                              return patient;
                        }
                  });

                  return {
                        ...state,
                        user: {
                              ...state.user,
                              patients: patientsUpdated
                        }
                  }
            }
            case "REMOVE_PATIENT": {
                  return { ...state }
            }
            case "REMOVE_PATIENT_REJECTED": {
                  return {
                        ...state,
                        error: action.payload
                  }
            }
            case "REMOVE_PATIENT_FULFILLED": {
                  const patientsUpdated = state.user.patients.filter((patient) => {
                        return (patient._id !== action.payload._id);
                  });

                  const appointmentsUpdated = state.user.appointments.filter((appointment) => {
                        return (appointment.id_patient !== action.payload._id);
                  });

                  return {
                        ...state,
                        user: {
                              ...state.user,
                              patients: patientsUpdated,
                              appointments: appointmentsUpdated
                        }
                  }
            }
            case "ADD_APPOINTMENT": {
                  return { ...state }
            }
            case "ADD_APPOINTMENT_REJECTED": {
                  return { ...state, error: action.payload }
            }
            case "ADD_APPOINTMENT_FULFILLED": {
                  const patientsUpdated = state.user.patients.map((patient) => {
                        if (patient._id === action.payload.id_patient) {
                              patient.appointments = [...patient.appointments, action.payload]
                        }
                        return patient;
                  });

                  return {
                        ...state,
                        user: {
                              ...state.user,
                              patients: patientsUpdated,
                              appointments: [...state.user.appointments, action.payload]
                        },
                  }
            }
            case "UPDATE_APPOINTMENT": {
                  return { ...state }
            }
            case "UPDATE_APPOINTMENT_REJECTED": {
                  return { ...state, error: action.payload }
            }
            case "UPDATE_APPOINTMENT_FULFILLED": {
                  const patientsUpdated = state.user.patients.map((patient) => {
                        if (patient._id === action.payload.id_patient) {
                              patient.appointments = patient.appointments.map((appointment) => {
                                    if (appointment._id === action.payload._id) {
                                          appointment = action.payload
                                    }
                                    return appointment;
                              });
                        }
                        return patient;
                  });

                  const appointmentsUpdated = state.user.appointments.map((appointment) => {
                        if (appointment._id === action.payload._id) {
                              appointment = action.payload
                        }
                        return appointment;
                  });

                  return {
                        ...state,
                        user: {
                              ...state.user,
                              patients: patientsUpdated,
                              appointments: appointmentsUpdated
                        },
                  }
            }
            case "REMOVE_APPOINTMENT": {
                  return { ...state }
            }
            case "REMOVE_APPOINTMENT_REJECTED": {
                  return {
                        ...state,
                        error: action.payload
                  }
            }
            case "REMOVE_APPOINTMENT_FULFILLED": {
                  const patientsUpdated = state.user.patients.map((patient) => {
                        if (patient._id === action.payload.id_patient) {
                              patient.appointments = patient.appointments.filter((appointment) => {
                                    return (appointment._id !== action.payload._id);
                              });
                        }
                        return patient;
                  });

                  const appointmentsUpdated = state.user.appointments.filter((appointment) => {
                        return (appointment._id !== action.payload._id);
                  });

                  return {
                        ...state,
                        user: {
                              ...state.user,
                              patients: patientsUpdated,
                              appointments: appointmentsUpdated
                        }
                  }
            }
            default: {
                  return state;
            }
      }
}


