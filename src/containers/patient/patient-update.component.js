import React, { Component } from 'react';
import { Col, Row, Input, Button } from 'react-materialize';
import { Redirect, Link } from 'react-router-dom';

class PatientFormUpdate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            _id: '',
            lastname: '',
            firstname: '',
            birthday: '',
            description: '',
            redirect: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        this.setState(this.props.patient, () => {
            this.props.setTitle(this.getTitle(this.state.firstname,
                this.state.lastname));
        });

    }

    getTitle(firstname, lastname) {
        if (firstname && lastname) {
            return firstname + ' ' + lastname;
        }

        return '';
    }

    updatePatient(id, firstname, lastname, birthday, description) {
        this.props.updatePatient(id, firstname, lastname, birthday, description)
            .then((id) => {
                this.setState({
                    redirect: true
                });
            });
    }

    customPath(path, id) {
        return path + '/' + id;
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
        event.preventDefault();
        this.updatePatient(this.state._id, this.state.firstname, this.state.lastname,
            this.state.birthday, this.state.description);
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <Row>
                    <Input s={12} m={6} name="firstname" placeholder="First Name" value={this.state.firstname} onChange={this.handleChange} />
                    <Input s={12} m={6} name="lastname" placeholder="Last Name" value={this.state.lastname} onChange={this.handleChange} />
                    <Input s={12} name="description" placeholder="Description" type="textarea" value={this.state.description} onChange={this.handleChange} />
                    <Col s={6}></Col>
                    <Input s={6} name="birthday" placeholder="Birthday" type="date" value={this.state.birthday} onChange={this.handleChange} />
                    <center>
                        <Button s={12} type="submit">Submit</Button>
                    </center>
                </Row>
                <div className="fixed-action-btn">
                    <Link to={this.customPath('/patient', this.state._id)} className="btn-floating btn-large">
                        <i className="large material-icons">person</i>
                    </Link>
                </div>
                {this.state.redirect && (
                    <Redirect to={this.customPath('/patient', this.state._id)} />
                )}
            </form>
        );
    }
}

export default PatientFormUpdate;
