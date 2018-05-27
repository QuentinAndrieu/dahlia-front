import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import Home from '../home/home.container';
import PatientList from '../patient/patient-list.container';
import PatientCreate from '../patient/patient-create.container';
import PatientDetail from '../patient/patient-detail.container';
import Calendar from '../calendar/calendar.container';
import Statistic from '../statistic/statistic.container';
import AuthRoute from '../../components/utils/auth-route.container';
import Loader from '../../components/utils/loader.component';
import Setting from '../setting/setting.container';


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
                    <AuthRoute exact path='/setting' component={<Setting />} />
                    <AuthRoute exact path='/patients' component={<PatientList />} />
                    <AuthRoute exact path='/patient/create' component={<PatientCreate />} />
                    <AuthRoute exact path='/patient/:id' component={<PatientDetail />} />
                    <AuthRoute exact path='/calendar' component={<Calendar />} />
                    <AuthRoute exact path='/statistic' component={<Statistic />} />
                </Switch>
            </div>
        );
    }
}

export default Root;
