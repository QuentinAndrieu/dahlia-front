import React, { Component } from 'react';

class PatientDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            patient: ''
        }
    }

    componentDidMount() {
        this.setState({
            patient: this.getPatient(this.props.match.params.id)
        });

        this.props.setTitle('Patient detail');
    }

    getPatient(id) {
        const patient = this.props.patients.filter(function (patient) {
            return (patient._id === id);
        });

        return patient[0];
    }

    render() {
        return (
            <div>{this.state.patient._id} {this.state.patient.firstname}</div>
        );
    }
}

export default PatientDetail;
