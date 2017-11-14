import { combineReducers } from "redux";
import user from "./user.reducer";
import authentification from "./authentification.reducer";
import admin from "./admin.reducer";


export default combineReducers({
    user,
    authentification,
    admin
})
