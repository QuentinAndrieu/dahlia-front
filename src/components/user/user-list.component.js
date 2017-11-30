import React, { Component } from 'react';
import { Collection, CollectionItem, Input, Row } from 'react-materialize';
import { Link } from 'react-router-dom';

class UserList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: []
        }

        this.searchUser = this.searchUser.bind(this);
    }

    componentDidMount() {
        this.props.setTitle('List users');
        this.props.fetchAllUsers();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.users !== this.state.users) {
            this.setState({
                users: nextProps.users
            })
        }
    }

    customPath(path, id) {
        return path + '/' + id;
    }

    searchUser(event) {
        const target = event.target;
        const value = target.value;

        const updatedUsersList = this.props.users.filter((user) => {
            return user.username.toLowerCase().search(
                value.toLowerCase()) !== -1;
        });

        this.setState({
            users: updatedUsersList
        });
    }

    render() {
        let mappedUsers = this.state.users.map(user =>
            <CollectionItem key={user._id} className="grey-text">
                <Link to={this.customPath('/admin/user', user._id)}>{user.username}</Link>
            </CollectionItem>);

        return (
            <div className='admin-user-list'>
                <Row>
                    <Input onChange={this.searchUser} s={12} label="Search User" />
                </Row>
                <Collection>
                    {mappedUsers}
                </Collection>
            </div>
        );
    }
}

export default UserList;
