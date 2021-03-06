export default function reducer(state = {
      token: null,
      authenticated: false,
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
                        token: action.payload
                  }
            }
            case "SET_TOKEN": {
                  return { ...state, token: action.payload }
            }
            case "UNAUTHENTICATED": {
                  return { ...state, authenticated: false }
            }
            case "AUTHENTICATED": {
                  return { ...state, authenticated: true }
            }
            default:
                  return state;
      }
}
