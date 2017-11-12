import { combineReducers } from "redux";
import user from "./UserReducer";
import authentification from "./AuthentificationReducer";
import patients from "./PatientReducer";


export default combineReducers({
    user,
    authentification,
    patients
})
