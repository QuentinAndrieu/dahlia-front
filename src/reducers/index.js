import { combineReducers } from 'redux';
import user from './user.reducer';
import authentification from './authentification.reducer';
import router from './router.reducer';
import { reducer as formReducer } from 'redux-form';


export default combineReducers({
    user,
    authentification,
    router,
    form: formReducer
})
