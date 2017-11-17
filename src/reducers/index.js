import { combineReducers } from "redux";
import user from "./user.reducer";
import authentification from "./authentification.reducer";
import admin from "./admin.reducer";
import router from "./router.reducer";


export default combineReducers({
    user,
    authentification,
    admin,
    router
})
