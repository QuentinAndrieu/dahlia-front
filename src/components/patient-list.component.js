import React, { Component } from 'react';
import { Collection, CollectionItem, Input } from 'react-materialize';

class PatientList extends Component {
  render() {

    const mappedPatients = this.props.patients.map(patient =>
      <CollectionItem key={patient._id} className='grey-text' href='#'>
        {patient.lastname} {patient.firstname}
      </CollectionItem>);

    return (
      <div className='patient-list'>
        <Input s={12} label="Search Patient" />
          <Collection>
            {mappedPatients}
          </Collection>
        </div>
    );
  }
}

export default PatientList;
