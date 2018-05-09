import React, { Component } from 'react';
import ListCustom from '../../components/utils/list-custom.component';

class PatientList extends Component {

  componentDidMount() {
    this.props.setTitle('list-patient');
  }

  render() {
    let patients = this.props.patients;
    
    patients.map((patient) => {
      patient.link = patient.firstname + ' ' + patient.lastname;
      return patient;
    });

    return (
      <ListCustom list={patients} path="/patient" title="patients" />
    );
  }
}

export default PatientList;
