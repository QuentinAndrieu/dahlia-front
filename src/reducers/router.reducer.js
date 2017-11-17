export default function reducer(state = {
    title: 'Dahlia',
}, action) {

    switch (action.type) {
        case "SET_TITLE": {
            return { ...state, title: action.payload }
        }
        default: {
            return state;
        }
    }
}
