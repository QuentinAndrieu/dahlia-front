import React, { Component } from 'react';
import { Row, Input, Col } from 'react-materialize';
import moment from 'moment';
import { Link, Redirect } from 'react-router-dom';

class PatientDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            patient: '',
            redirect: false
        }

        this.props.setTitle('');
        this.removePatient = this.removePatient.bind(this);
    }

    componentDidMount() {
        this.setState({
            patient: this.getPatient(this.props.match.params.id)
        }, () => {
            this.props.setTitle(this.getTitle(this.state.patient.firstname, this.state.patient.lastname));
        });
    }

    getPatient(id) {
        const patient = this.props.patients.filter((patient) => {
            return (patient._id === id);
        });

        if (patient[0]) {
            const formatBirthday = moment(patient[0].birthday).format('L');

            const patientUpdated = {
                ...patient[0],
                birthday: formatBirthday
            };

            return patientUpdated;
        }
    }

    removePatient(id) {
        this.props.removePatient(id, () => {
            this.setState({
                redirect: true
            })
        });
    }

    getTitle(firstname, lastname) {
        if (firstname && lastname) {
            return firstname + ' ' + lastname;
        }

        return '';
    }

    customPath(path, id) {
        return path + '/' + id;
    }

    render() {
        const detailPatient = {
            minHeight: '400px'
        }

        const icons = {
            cursor: 'pointer'
        }

        return (
            <Row >
                <div style={detailPatient}>
                    <Col s={3} >
                        <p>
                            <strong>Firstname:</strong> {this.state.patient.firstname}
                        </p>
                        <p>
                            <strong>Lastname:</strong> {this.state.patient.lastname}
                        </p>
                        <p>
                            <strong>Birthday:</strong> {this.state.patient.birthday}
                        </p>
                    </Col>
                    <Col s={8}>
                        <p>{this.state.patient.description}</p>
                    </Col>
                    <Col s={1}>
                        <p>
                            <Link to={this.customPath('/patient/update', this.state.patient._id)}>
                                <i style={icons} className="small material-icons icons">create</i>
                            </Link>
                        </p>
                        <p>
                            <i onClick={() => { this.removePatient(this.state.patient._id) }}
                                style={icons} className="small material-icons icons">delete</i>
                        </p>
                    </Col>
                </div>
                <Col s={3}>
                    <p>
                        <strong>Add appointment:</strong>
                    </p>
                </Col>
                <Col s={8}>
                    <Input s={12} name="description" label="Description" type="textarea" />
                </Col>
                <Col s={1}>
                    <p><i style={icons} className="small material-icons icons">send</i></p>
                </Col>
                {this.state.redirect && (
                    <Redirect to="/patients" />
                )}
            </Row>
        );
    }
}

export default PatientDetail;
