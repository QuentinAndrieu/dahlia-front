import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import Home from '../home/home.container';
import PatientList from '../patient/patient-list.container';
import PatientCreate from '../patient/patient-create.container';
import UserUpdate from '../user/user-update.container';
import PatientDetail from '../patient/patient-detail.container';
import PatientUpdate from '../patient/patient-update.container';
import AppointmentUpdate from '../appointment/appointment-update.container';
import AppointmentCreate from '../appointment/appointment-create.container';
import Calendar from '../calendar/calendar.container';
import AuthRoute from '../../components/utils/auth-route.container';
import Loader from '../../components/utils/loader.component';


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

        return (
            <div className="root">
                <Switch >
                    <AuthRoute exact path='/' component={<Home />} />
                    <AuthRoute exact path='/profile' component={<UserUpdate />} />
                    <AuthRoute exact path='/patients' component={<PatientList />} />
                    <AuthRoute exact path='/patient/create' component={<PatientCreate />} />
                    <AuthRoute exact path='/patient/:id' component={<PatientDetail />} />
                    <AuthRoute exact path='/patient/update/:id' component={<PatientUpdate />} />
                    <AuthRoute exact path='/patient/:id/appointment/create' component={<AppointmentCreate />} />
                    <AuthRoute exact path='/appointment/update/:id' component={<AppointmentUpdate />} />
                    <AuthRoute exact path='/calendar' component={<Calendar />} />
                </Switch>
            </div>
        );
    }
}

export default Root;
