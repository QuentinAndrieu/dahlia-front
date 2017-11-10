export default function reducer(state = {
      token: null,
      mail: null,
      password: null,
      fetching: false,
      fetched: false,
      error: null
}, action) {

      switch (action.type) {
            case "FETCH_JWT_TOKEN": {
                  return { ...state, fetching: true }
            }
            case "FETCH_JWT_TOKEN_REJECTED": {
                  return { ...state, fetching: false, error: action.payload }
            }
            case "FETCH_JWT_TOKEN_FULFILLED": {
                  return {
                        ...state,
                        fetching: false,
                        fetched: true,
                        token: action.payload,
                  }
            }
            case "SET_MAIL": {
                  return {
                        ...state,
                        mail: action.payload
                  }
            }
            case "SET_PASSWORD": {
                  return {
                        ...state,
                        password: action.payload
                  }
            }
            default:
                  return state;
      }

      return state
}
