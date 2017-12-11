import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import { Redirect, Link } from 'react-router-dom';
import SignInForm from '../../components/form/signin-form.component';
import { SubmissionError } from 'redux-form';

class UserSignIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        };

        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        this.props.setTitle('Sign In');
    }

    validate(mail, password) {
        let errors = {}
        let isError = false;

        if (!mail || mail.trim() === '') {
            errors.mail = 'Required mail';
            isError = true;
        }

        if (!password || password.trim() === '') {
            errors.password = 'Required password';
            isError = true;
        }

        if (isError) {
            throw new SubmissionError(
                {
                    ...errors,
                    _error: 'Required input missing'
                });
        }

        return !isError;
    }

    submit(values) {
        if (this.validate(values.mail, values.password)) {
            const props = this.props;
            return props.fetchJWTToken(values.mail, values.password)
                .then((jwtToken) => {
                    return props.fetchUser(jwtToken);
                }).then((user) => {
                    this.setState({
                        redirect: true
                    });
                }).catch((err) => {
                    throw new SubmissionError({
                        _error: err
                    });
                });
        }
    }

    render() {
        return (
            <Row className="login">
                <Col s={12} m={3} l={4}></Col>
                <Col className="container-login" s={12} m={6} l={4}>
                    <center>
                        <img className="responsive-img img-logo" alt="" src="images/Dahlia.png" />
                        <h4>Dahlia</h4>
                    </center>

                    <SignInForm onSubmit={this.submit} />

                    <center className="login-link">
                        You don't have an account ? <Link to="/signup">Sign Up</Link>
                    </center>
                </Col>
                <Col s={12} m={3} l={4}></Col>
                {this.state.redirect && (
                    <Redirect to="" />
                )}
            </Row>
        );
    }
}

export default UserSignIn;