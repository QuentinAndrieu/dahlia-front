import React, { Component } from 'react';
import ListCustom from '../../components/utils/list-custom.component';

class UserList extends Component {

    constructor(props) {
        super(props);

        const updatedUsers = this.props.users.map((user) => {
            user.link = user.firstname + ' ' + user.lastname;
            return user;
        });

        this.state = {
            users: updatedUsers
        }
    }

    componentDidMount() {
        this.props.setTitle('List users');
    }

    render() {
        return (
            <ListCustom list={this.state.users} path="/admin/user" />
        );
    }
}

export default UserList;
