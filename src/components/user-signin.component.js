import React, { Component } from 'react';
import { Row, Input, Container, Button } from 'react-materialize';

class UserSignIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            mail: '',
            password: ''
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


    submit(event) {
        const props = this.props;
        props.fetchJWTToken(this.state.mail, this.state.password, function (jwtToken) {
            props.fetchUser(jwtToken);
        });
        event.preventDefault();
    }

    render() {
        return (
            <Container>
                <form onSubmit={this.submit}>
                    <Row>
                        <Input s={6} type="text" name="mail" value={this.state.mail} onChange={this.handleChange} />
                        <Input s={6} type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                        <center><Button s={12} type="submit">Submit</Button></center>
                    </Row>
                </form>
            </Container>
        );
    }
}

export default UserSignIn;