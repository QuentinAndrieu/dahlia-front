import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import PatientList from './PatientList';
import PatientForm from './PatientForm';
import UserSignIn from './UserSignIn';
import UserForm from './UserForm';


class Root extends Component {

    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/signin' component={UserSignIn} />
                <Route exact path='/user/form' component={UserForm} />
                <Route exact path='/patients' component={PatientList} />
                <Route exact path='/patient/form' component={PatientForm} />
            </Switch>
        );
    }
}

export default Root;
