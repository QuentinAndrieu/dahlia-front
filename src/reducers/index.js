import { combineReducers } from "redux";
import user from "./UserReducer";
import authentification from "./AuthentificationReducer";
import admin from "./AdminReducer";


export default combineReducers({
    user,
    authentification,
    admin
})
