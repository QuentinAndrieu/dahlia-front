import React, { Component } from 'react';
import { Col, Row, Input, Button } from 'react-materialize';
import { addPatient } from '../actions/PatientActions';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

class PatientForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lastname: '',
            firstname: '',
            birthday: '',
            description: ''
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
        this.props.addPatient(this.state.firstname, this.state.lastname, this.state.birthday,
            this.state.description);
        event.preventDefault();
    }

    render() {
        const patientForm = {
            marginTop: '57px'
        }

        return (
            <Row>
                <form onSubmit={this.submit}>
                    <Col s={3}>
                        <h4 className='cyan-text'>Patient Form</h4>
                    </Col>
                    <Col s={9}>
                        <div style={patientForm}>
                            <Row>
                                <Input s={6} name="firstname" label='First Name' value={this.state.firstname} onChange={this.handleChange} />
                                <Input s={6} name="lastname" label='Last Name' value={this.state.lastname} onChange={this.handleChange} />
                                <Input s={12} name="description" label='Description' type='textarea' value={this.state.description} onChange={this.handleChange} />
                                <Col s={6}></Col>
                                <Input s={6} name="birthday" label='Birthday' type='date' value={this.state.birthday} onChange={this.handleChange} />
                                <Button s={12} type="submit">Submit</Button>
                            </Row>
                        </div>
                    </Col>
                </form>
            </Row>
        );
    }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        addPatient: addPatient
    }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(PatientForm);
