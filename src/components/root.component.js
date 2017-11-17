import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../containers/home.container';
import PatientList from '../containers/patient-list.container';
import PatientCreate from '../containers/patient-create.container';
import UserUpdate from '../containers/user-update.container';
import Loader from './loader.component';
import decode from 'jwt-decode';


class Root extends Component {

    isLoading() {
        return this.props.fetching;
    }

    render() {

        if (this.isLoading()) {
            return (
                <center>
                    <Loader />
                </center>);
        }

        const containerRoot = {
            marginTop: '57px'
        }

        return (
            <div style={containerRoot}>
                <Switch >
                    <AuthRoute exact path='/' component={<Home />} />
                    <AuthRoute exact path='/profile' component={<UserUpdate />} />
                    <AuthRoute exact path='/patients' component={<PatientList />} />
                    <AuthRoute exact path='/patient/create' component={<PatientCreate />} />
                </Switch>
            </div>
        );
    }
}

class AuthRoute extends Component {

    isAuthenticated() {
        const token = sessionStorage.getItem('jwtToken');

        if (!token) {
            return false;
        }

        try {
            const { exp } = decode(token);

            if (exp < new Date().getTime() / 1000) {
                return false;
            }
        } catch (e) {
            return false;
        }

        return true;
    }

    render() {
        return (
            <Route exact path={this.props.path} render={() => (
                this.isAuthenticated() ? (
                    this.props.component
                ) : (
                        <Redirect to='/signin' />
                    )
            )} />
        );
    }
}

export default Root;
