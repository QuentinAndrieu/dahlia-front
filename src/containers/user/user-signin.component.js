import React, { Component } from 'react';
import { Row, Input, Button, Col } from 'react-materialize';
import { Redirect, Link } from 'react-router-dom';

class UserSignIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            mail: '',
            password: '',
            redirect: false
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
        this.props.setTitle('Sign In');
    }

    submit(event) {
        const props = this.props;
        props.fetchJWTToken(this.state.mail, this.state.password, (jwtToken) => {
            props.fetchUser(jwtToken, () => {
                this.setState({
                    redirect: true
                })
            });
        });
        event.preventDefault();
    }

    render() {
        const imgLogo = {
            width: '200px'
        }

        const formSignin = {
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
            <form style={formSignin} onSubmit={this.submit}>
                <Row >
                    <Col s={12} m={4}></Col>
                    <Col style={containerSignin} s={12} m={4}>
                        <center>
                            <img className="responsive-img" alt="" style={imgLogo} src="images/Dahlia.png" />
                            <h4>Dahlia</h4>
                        </center>
                        <Input s={12} placeholder="Mail" type="text" name="mail" value={this.state.mail} onChange={this.handleChange} />
                        <Input s={12} placeholder="Password" type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                        <center>
                            <Button s={12} type="submit">Sign In</Button>
                        </center>   
                        <center style={signupLink}>
                            You don't have an account ? <Link to="/signup">Sign Up</Link>
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

export default UserSignIn;