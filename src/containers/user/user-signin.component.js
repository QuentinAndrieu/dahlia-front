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
        const imgLogo = {
            width: '200px'
        }

        const userSignIn = {
            marginTop: '70px'
        }

        const containerSignin = {
            border: '1px solid',
            borderColor: '#e6e6e6',
            padding: '20px'
        }

        const signupLink = {
            marginTop: '40px'
        }

        return (
            <div style={userSignIn}>
                <Row >
                    <Col s={12} m={4}></Col>
                    <Col style={containerSignin} s={12} m={4}>
                        <center>
                            <img className="responsive-img" alt="" style={imgLogo} src="images/Dahlia.png" />
                            <h4>Dahlia</h4>
                        </center>

                        <SignInForm onSubmit={this.submit} />

                        <center style={signupLink}>
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