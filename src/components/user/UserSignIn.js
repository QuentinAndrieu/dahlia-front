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
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    authenticate(mail, password) {
        fetch('https://dahlia-api.herokuapp.com/authenticate', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                mail: mail,
                password: password
            })
        }).then((response) => {
            return response.json();
        }).then((responseJson) => {
            console.log('Authentification successful');
            sessionStorage.setItem('jwtToken', responseJson.token);
        }).catch(() => {
            console.log('Authentification failed');
        })
    }


    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        this.authenticate(this.state.mail, this.state.password);
        event.preventDefault();
    }

    render() {
        return (
            <Container>
                <form onSubmit={this.handleSubmit}>
                    <Row>
                        <Input s={6} type="text" name="mail" value={this.state.mail} onChange={this.handleChange} />
                        <Input s={6} type="text" name="password" value={this.state.password} onChange={this.handleChange} />
                        <Button s={12} type="submit">Submit</Button>
                    </Row>
                </form>
            </Container>
        );
    }
}

export default UserSignIn;