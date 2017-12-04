import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

class AdminRoute extends Component {

    componentWillMount(){
        this.props.isAuthenticated(this.props.token);
    }

    isAdmin(){
       return this.props.authenticated && this.props.admin; 
    }

    render() {
        return (
            <Route exact path={this.props.path} render={() => (
                this.isAdmin() ? (
                    this.props.component
                ) : (
                        <Redirect to='/signin' />
                    )
            )} />
        );
    }
}

export default AdminRoute;
