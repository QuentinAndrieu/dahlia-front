import React, { Component } from 'react';
import { Col, Row, Input, Button } from 'react-materialize';
import { updateUser } from '../actions/UserActions';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

class UserForm extends Component {

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

    submit(event) {
        this.props.updateUser(this.state.username, this.state.lastname, this.state.firstname, this.state.mail);
        event.preventDefault();
    }

    render() {
        const userForm = {
            marginTop: '57px'
        }

        return (
            <Row>
                <form onSubmit={this.submit}>
                    <Col s={3}>
                        <h4 className='cyan-text'>User Form</h4>
                    </Col>
                    <Col s={9}>
                        <div style={userForm}>
                            <Row>
                                <Input s={12} name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
                                <Input s={12} name="mail" placeholder="Mail" value={this.state.mail} onChange={this.handleChange} />
                                <Input s={6} name="lastname" placeholder="Last Name" value={this.state.lastname} onChange={this.handleChange} />
                                <Input s={6} name="firstname" placeholder="First Name" value={this.state.firstname} onChange={this.handleChange} />
                                <Button s={12} type="submit">Submit</Button>
                            </Row>
                        </div>
                    </Col>
                </form>
            </Row >
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user.user,
    fetched: state.user.fetched
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateUser: updateUser
    }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
