export function setTitle(title) {
    return function (dispatch) {
        dispatch({ type: "SET_TITLE", payload: title });
    }
}