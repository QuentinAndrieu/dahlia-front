import { combineReducers } from "redux";
import user from "./user.reducer";
import authentification from "./authentification.reducer";
import router from "./router.reducer";


export default combineReducers({
    user,
    authentification,
    router
})
