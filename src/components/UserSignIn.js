import React, { Component } from 'react';
import { Row, Input, Container, Button } from 'react-materialize';
import { connect } from "react-redux";
import { fetchJWTToken, setMail, setPassword } from '../actions/AuthentificationActions';

class UserSignIn extends Component {

    constructor(props) {
        super(props);

        this.setMail = this.setMail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.submit = this.submit.bind(this);
    }

    setMail(event) {
        this.props.dispatch(setMail(event.target.value));
    }

    setPassword(event) {
        this.props.dispatch(setPassword(event.target.value));
    }

    submit(event) {
        this.props.dispatch(fetchJWTToken(this.props.mail, this.props.password));
        event.preventDefault();
    }

    render() {
        return (
            <Container>
                <form onSubmit={this.submit}>
                    <Row>
                        <Input s={6} type="text" name="mail" onChange={this.setMail} />
                        <Input s={6} type="text" name="password" onChange={this.setPassword} />
                        <Button s={12} type="submit">Submit</Button>
                    </Row>
                </form>
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    token: state.authentification.token,
    mail: state.authentification.mail,
    password: state.authentification.password
});

export default connect(mapStateToProps)(UserSignIn);