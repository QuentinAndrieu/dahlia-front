import React, { Component } from 'react';
import { Row, Input, Button } from 'react-materialize';

class UserUpdate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            lastname: '',
            firstname: '',
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
        this.setState(this.props.user);
        this.props.setTitle('Profile');
    }

    submit(event) {
        const username = this.state.lastname + ' ' + this.state.firstname;

        this.props.updateUserById(this.state._id, username, this.state.lastname,
            this.state.firstname, this.state.mail);
        event.preventDefault();
    }

    render() { 
        return (
            <form onSubmit={this.submit}>
                <Row>
                    <Input s={6} name="lastname" placeholder="Last Name" value={this.state.lastname} onChange={this.handleChange} />
                    <Input s={6} name="firstname" placeholder="First Name" value={this.state.firstname} onChange={this.handleChange} />
                    <Input s={12} name="mail" placeholder="Mail" value={this.state.mail} onChange={this.handleChange} />
                    <center>
                        <Button s={12} type="submit">Submit</Button>
                    </center>
                </Row>
            </form>
        );
    }
}

export default UserUpdate;
