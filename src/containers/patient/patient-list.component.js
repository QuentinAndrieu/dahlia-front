import React, { Component } from 'react';
import ListCustom from '../../components/utils/list-custom.component';

class PatientList extends Component {

  constructor(props) {
    super(props);

    const updatedPatients = this.props.patients.map((patient) => {
      patient.link = patient.firstname + ' ' + patient.lastname;
      return patient;
    });

    this.state = {
      patients: updatedPatients
    }

  }

  componentDidMount() {
    this.props.setTitle('list-patient');
  }

  render() {
    return (
      <ListCustom list={this.state.patients} path="/patient" title="patients" />
    );
  }
}

export default PatientList;
