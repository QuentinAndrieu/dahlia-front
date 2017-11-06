import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../main/Main';
import PatientList from '../patient/PatientList';
import PatientForm from '../patient/PatientForm';

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Main} />
                <Route exact path='/patients' component={PatientList} />
                <Route exact path='/patient/form' component={PatientForm} />
            </Switch>
        );
    }
}

export default Router;
