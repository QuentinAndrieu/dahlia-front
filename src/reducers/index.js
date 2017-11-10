import { combineReducers } from "redux"

import user from "./UserReducer"
import authentification from "./AuthentificationReducer"

export default combineReducers({
    user,
    authentification
})
