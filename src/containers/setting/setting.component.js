import React, { Component } from 'react';
import ModalCustom from '../../components/modal/modal-custom.component';
import UserUpdate from '../user/user-update.container';
import { Row, Col } from 'react-materialize';
import { Link } from 'react-router-dom';

class Setting extends Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
            modalIsOpenUpdateUser: false
        }

        this.openModalUpdateUser = this.openModalUpdateUser.bind(this);
        this.closeModalUpdateUser = this.closeModalUpdateUser.bind(this);
    }

    componentDidMount() {
        this.props.setTitle('setting');
    }

    openModalUpdateUser() {
        this.setState({
            modalIsOpenUpdateUser: true
        });
    }

    closeModalUpdateUser() {
        this.setState({
            modalIsOpenUpdateUser: false
        });
    }

    customPath(path, id) {
        return path + '/' + id;
    }

    render() {
        const { user } = this.props;
        return (
            <div className="setting">
                <Row>
                    <Col s={9}>
                        <label>Firstname</label>
                        <p>{user.firstname}</p>
                    </Col>

                    <Col s={3}>
                        <Link to="#" onClick={this.openModalUpdateUser}>
                            <strong>Update</strong>
                        </Link>

                        <ModalCustom
                            label="Update patient"
                            modalIsOpen={this.state.modalIsOpenUpdateUser}
                            closeModal={this.closeModalUpdateUser}
                            component={
                                <UserUpdate
                                    closeModal={this.closeModalUpdateUser}
                                    user={user}
                                />}
                        />
                    </Col>

                    <Col s={12}>
                        <label>Lastname</label>
                        <p>{user.lastname}</p>
                    </Col>

                    <Col s={12}>
                        <label>Email</label>
                        <p>{user.mail}</p>
                    </Col>

                    <Col s={12}>
                        <label>Default rate appointment</label>
                        <p>{user.defaultRate}$</p>
                    </Col>

                    <Col s={12}>
                        <label>Default duration appointment</label>
                        <p>{user.defaultDuration}$</p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Setting;
