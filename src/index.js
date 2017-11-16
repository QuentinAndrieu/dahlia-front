import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app.container';
import UserSignIn from './containers/user-signin.container';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render((
    <Provider store={store}>
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/signin' component={UserSignIn} />
                    <Route path='/' component={App} />
                </Switch>
            </BrowserRouter>
        </div>
    </Provider>
), document.getElementById('root'));

registerServiceWorker();
