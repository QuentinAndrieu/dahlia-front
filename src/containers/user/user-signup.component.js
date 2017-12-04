import React, { Component } from 'react';
import { Row, Input, Button, Col } from 'react-materialize';
import { Redirect, Link } from 'react-router-dom';

class UserSignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            password: '',
            passwordCopy: '',
            mail: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    componentDidMount() {
        this.props.setTitle('Profile');
    }

    submit(event) {
        if (this.state.password === this.state.passwordCopy) {
            this.props.register(this.state.mail, this.state.password, () => {
                this.props.fetchJWTToken(this.state.mail, this.state.password, () => {
                    this.setState({
                        redirect: true
                    });
                });
            });
        }
        event.preventDefault();
    }

    render() {
        const imgLogo = {
            width: '200px'
        }

        const formSignUp = {
            marginTop: '70px'
        }

        const containerSignUp = {
            border: '1px solid',
            borderColor: '#e6e6e6',
            padding: '20px'
        }

        const signinLink = {
            marginTop: '40px'
        }

        return (
            <form style={formSignUp} onSubmit={this.submit}>
                <Row >
                    <Col s={12} m={4}></Col>
                    <Col style={containerSignUp} s={12} m={4}>
                        <center>
                            <img className="responsive-img" alt="" style={imgLogo} src="images/Dahlia.png" />
                            <h4>Dahlia</h4>
                        </center>
                        <Input s={12} placeholder="Mail" type="text" name="mail" value={this.state.mail} onChange={this.handleChange} />
                        <Input s={12} placeholder="Password" type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                        <Input s={12} placeholder="Copy password" type="password" name="passwordCopy" value={this.state.passwordCopy} onChange={this.handleChange} />
                        <center>
                            <Button s={12} type="submit">Sign Up</Button>
                        </center>
                        <center style={signinLink}>
                            You already have an account ? <Link to="/signin">Sign In</Link>
                        </center>
                    </Col>
                    <Col s={12} m={4}></Col>
                </Row>
                {this.state.redirect && (
                    <Redirect to="" />
                )}
            </form>
        );
    }
}

export default UserSignUp;
