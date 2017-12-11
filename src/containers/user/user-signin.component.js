import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import { Redirect, Link } from 'react-router-dom';
import SignInForm from '../../components/form/signin-form.component';
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

    submit(values) {
        const props = this.props;
        props.fetchJWTToken(values.mail, values.password)
            .then((jwtToken) => {
                return props.fetchUser(jwtToken);
            }).then((user) => {
                this.setState({
                    redirect: true
                });
            }).catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className="login">
                <Row >
                    <Col s={12} m={4}></Col>
                    <Col className="container-login" s={12} m={4}>
                        <center>
                            <img className="responsive-img img-logo" alt="" src="images/Dahlia.png" />
                            <h4>Dahlia</h4>
                        </center>

                        <SignInForm onSubmit={this.submit} />

                        <center className="login-link">
                            You don't have an account ? <Link to="/signup">Sign Up</Link>
                        </center>
                    </Col>
                    <Col s={12} m={4}></Col>
                </Row>
                {this.state.redirect && (
                    <Redirect to="" />
                )}
            </div>
        );
    }
}

export default UserSignIn;