import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import { Redirect, Link } from 'react-router-dom';
import SignUpForm from '../../components/form/signup-form.component';
import { SubmissionError } from 'redux-form';
import InputValidationService from '../../service/input-validation.service';

class UserSignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        };

        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        this.props.setTitle('signup');
    }

    submit(values) {
        const inputValidationService = new InputValidationService();

        const formatValues = [{
            key: 'mail',
            value: values.mail
        }, {
            key: 'password',
            value: values.password
        }, {
            key: 'passwordCopy',
            value: values.passwordCopy
        }];

        const required = inputValidationService.required(formatValues);
        const matchPassword = inputValidationService.comparePassword(values.password, values.passwordCopy);

        if (required && matchPassword) {
            return this.props.register(values.mail, values.password)
                .then(() => {
                    return this.props.fetchJWTToken(values.mail, values.password);
                })
                .then(() => {
                    this.setState({
                        redirect: true
                    });
                })
                .catch((err) => {
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
                        <img className="responsive-img img-logo" alt="" src="images/Dahliab.png" />
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
