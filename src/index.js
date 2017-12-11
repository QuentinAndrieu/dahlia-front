import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/global/app.container';
import UserSignIn from './containers/user/user-signin.container';
import UserSignUp from './containers/user/user-signup.container';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import './styles/calendar.css';
import './styles/global.css';
import './styles/index.css';
import './styles/login.css';
import './styles/patient.css';

ReactDOM.render((
    <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/signin' component={UserSignIn} />
                    <Route exact path='/signup' component={UserSignUp} />
                    <Route path='/' component={App} />
                </Switch>
            </BrowserRouter>
    </Provider>
), document.getElementById('root'));

registerServiceWorker();
