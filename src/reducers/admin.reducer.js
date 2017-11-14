export default function reducer(state = {
    patients:[],
    users: [],
    appointments:[],
    error: null
}, action) {

    switch (action.type) {
        default: {
            return state;
        }
    }

    return state;
}
