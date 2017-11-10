import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import PatientList from './PatientList';
import PatientForm from './PatientForm';
import UserSignIn from './UserSignIn';


class Router extends Component {
    isLogIn() {
        return Boolean(sessionStorage.getItem('jwtToken'));
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" render={() => (
                    this.isLogIn() ? (
                        <Home />
                    ) : (
                            <Redirect to="/signin" />
                        )
                )} />

                {/* <Route exact path='/' component={Home} /> */}
                <Route exact path='/signin' component={UserSignIn} />
                <Route exact path='/patients' component={PatientList} />
                <Route exact path='/patient/form' component={PatientForm} />
            </Switch>
        );
    }


}

export default Router;
