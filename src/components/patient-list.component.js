import React, { Component } from 'react';
import { Collection, CollectionItem, Input, Row } from 'react-materialize';
import { Link } from 'react-router-dom';

class PatientList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      patients: this.props.patients
    }

    this.searchPatient = this.searchPatient.bind(this);
  }

  componentDidMount() {
    this.props.setTitle('List patients');
  }

  searchPatient(event) {
    const target = event.target;
    const value = target.value;

    const updatedPatientsList = this.props.patients.filter((patient) => {
      return patient.firstname.toLowerCase().search(
        value.toLowerCase()) !== -1;
    })

    this.setState({
      patients: updatedPatientsList
    })
  }

  customPath(path, id) {
    return path + '/' + id;
  }

  render() {
    let mappedPatients = this.state.patients.map(patient =>
      <CollectionItem key={patient._id} className="grey-text">
        <Link to={this.customPath('/patient', patient._id)}>{patient.lastname} {patient.firstname}</Link>
      </CollectionItem>);

    return (
      <div className='patient-list'>
        <Row>
          <Input onChange={this.searchPatient} s={12} label="Search Patient" />
        </Row>
        <Collection>
          {mappedPatients}
        </Collection>
      </div>
    );
  }
}

export default PatientList;
