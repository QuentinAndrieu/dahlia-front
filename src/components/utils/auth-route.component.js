import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

class AuthRoute extends Component {

    componentWillMount() {
        this.props.isAuthenticated(this.props.token)
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (<
            Route exact path={
                this.props.path
            }
            render={
                () => (
                    this.props.authenticated ? (
                        this.props.component
                    ) : (<
                        Redirect to='/signin' />
                        )
                )
            }
        />
        )
    }
}

export default AuthRoute;