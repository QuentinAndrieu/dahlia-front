import React, { Component } from 'react';
import ListCustom from '../../components/utils/list-custom.component';
import { Link } from 'react-router-dom';

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
    this.props.setTitle('List patients');
  }

  render() {

    return (
      <div>
        <ListCustom list={this.state.patients} path="/patient" title="patients" />
        <div className="fixed-action-btn">
          <Link to="/patient/create" className="btn-floating btn-large">
            <i className="large material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}

export default PatientList;
