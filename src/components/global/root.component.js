import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import Home from '../../containers/home/home.container';
import PatientList from '../../containers/patient/patient-list.container';
import PatientCreate from '../../containers/patient/patient-create.container';
import UserUpdate from '../../containers/user/user-update.container';
import PatientDetail from '../../containers/patient/patient-detail.container';
import PatientUpdate from '../../containers/patient/patient-update.container';
import AppointmentUpdate from '../../containers/appointment/appointment-update.container';
import Calendar from '../../containers/calendar/calendar.container';
import AdminUserList from '../../containers/admin/admin-user-list.container';
import AuthRoute from '../../containers/global/auth-route.container';
import AdminRoute from '../../containers/global/auth-route-admin.container';
import AdminUserUpdate from '../../containers/admin/admin-user-update.container';
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
                    <AuthRoute exact path='/appointment/update/:id' component={<AppointmentUpdate />} />
                    <AuthRoute exact path='/calendar' component={<Calendar />} />
                    <AdminRoute exact path='/admin/users' component={<AdminUserList />} />
                    <AdminRoute exact path='/admin/user/:id' component={<AdminUserUpdate />} />
                </Switch>
            </div>
        );
    }
}

export default Root;
