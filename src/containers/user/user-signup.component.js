import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import { Redirect, Link } from 'react-router-dom';
import SignUpForm from '../../components/form/signup-form.component';
import { SubmissionError } from 'redux-form';

class UserSignUp extends Component {

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

    validate(mail, password, passwordCopy) {
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

        if (!passwordCopy || password.trim() === '') {
            errors.passwordCopy = 'Required password copy';
            isError = true;
        }

        if (passwordCopy !== password) {
            errors.passwordCopy = 'Password copy is different from password';
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
        if (this.validate(values.mail, values.password, values.passwordCopy)) {
            return this.props.register(values.mail, values.password)
                .then(() => {
                    return this.props.fetchJWTToken(values.mail, values.password);
                }).then(() => {
                    this.setState({
                        redirect: true
                    });
                }).catch((err) => {
                    throw new SubmissionError(
                        {
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

                    <SignUpForm onSubmit={this.submit} />

                    <center className="login-link">
                        You already have an account ? <Link to="/signin">Sign In</Link>
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

export default UserSignUp;
