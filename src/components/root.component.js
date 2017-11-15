import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../containers/home.container';
import PatientList from '../containers/patient-list.container';
import PatientCreate from '../containers/patient-create.container';
import UserSignIn from '../containers/user-signin.container';
import UserUpdate from '../containers/user-update.container';
import Loader from './loader.component';


class Root extends Component {

    isLoading(){
        return this.props.fetching;
    }

    isNotLogIn(){
        return !this.props.fetching && !this.props.fetched && this.props.hasFetch;
    }

    render() {

        if (this.isLoading()) {
            return (<Loader />);
        }

        if (this.isNotLogIn()) {
            return <Redirect to='/signin' />;
        }

        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/signin' component={UserSignIn} />
                <Route exact path='/user/form/update' component={UserUpdate} />
                <Route exact path='/patients' component={PatientList} />
                <Route exact path='/patient/form' component={PatientCreate} />
            </Switch>
        );

    }
}

export default Root;
