import React, { Component } from 'react';
import { Col, Row, Input, Button } from 'react-materialize';

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

    componentDidMount(){
        this.props.setTitle('Create Patient');
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
        return (
            <form onSubmit={this.submit}>
                <Row>
                    <Input s={6} name="firstname" label='First Name' value={this.state.firstname} onChange={this.handleChange} />
                    <Input s={6} name="lastname" label='Last Name' value={this.state.lastname} onChange={this.handleChange} />
                    <Input s={12} name="description" label='Description' type='textarea' value={this.state.description} onChange={this.handleChange} />
                    <Col s={6}></Col>
                    <Input s={6} name="birthday" label='Birthday' type='date' value={this.state.birthday} onChange={this.handleChange} />
                    <center>
                        <Button s={12} type="submit">Submit</Button>
                    </center>
                </Row>
            </form>
        );
    }
}

export default PatientForm;
