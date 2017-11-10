import React, { Component } from 'react';
import { Row, Input, Container, Button } from 'react-materialize';
import { connect } from "react-redux";
import { fetchJWTToken } from '../actions/AuthentificationActions';

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

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('token', this.props.token);
        console.log(this.state.mail, this.state.password);
        this.props.dispatch(fetchJWTToken(this.state.mail, this.state.password));
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

const mapStateToProps = (state) => ({
    token: state.authentification.token
})

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchJWTToken: fetchJWTToken, 
//         test: test
//       }
// }


export default connect(mapStateToProps)(UserSignIn);