import React, { Component } from 'react';
import { Collection, CollectionItem, Input, Row } from 'react-materialize';

class PatientList extends Component {
  
  componentDidMount() {
    this.props.setTitle('List patients');
  }

  render() {
    const mappedPatients = this.props.patients.map(patient =>
      <CollectionItem key={patient._id} className='grey-text' href='#'>
        {patient.lastname} {patient.firstname}
      </CollectionItem>);

    return (
      <div className='patient-list'>
        <Row>
          <Input s={12} label="Search Patient" />
        </Row>
        <Collection>
          {mappedPatients}
        </Collection>
      </div>
    );
  }
}

export default PatientList;
