import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import Home from '../containers/home.container';
import PatientList from '../containers/patient-list.container';
import PatientCreate from '../containers/patient-create.container';
import UserUpdate from '../containers/user-update.container';
import PatientDetail from '../containers/patient-detail.container';
import PatientUpdate from '../containers/patient-update.container';
import AuthRoute from '../containers/auth-route.container';
import Loader from './loader.component';


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
                    <AuthRoute exact path='/patient/:id' component={<PatientDetail />} />
                    <AuthRoute exact path='/patient/update/:id' component={<PatientUpdate />} />
                </Switch>
            </div>
        );
    }
}

export default Root;
