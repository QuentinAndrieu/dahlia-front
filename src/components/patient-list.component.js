import React, { Component } from 'react';
import { Collection, CollectionItem, Col, Row, Input } from 'react-materialize';

class PatientList extends Component {
  render() {
    const patientCollection = {
      marginTop: '57px'
    }

    const mappedPatients = this.props.patients.map(patient =>
      <CollectionItem key={patient._id} className='cyan-text' href='#'>
        {patient.lastname} {patient.firstname}
      </CollectionItem>);

    return (
      <div className='patient-list'>
        <Row>
          <Col m={3} s={12}>
            <Row>
              <Input s={12} label="Search Patient" />
            </Row>
          </Col>

          <Col m={9} s={12}>
            <div style={patientCollection}>
              <Collection>
                {mappedPatients}
              </Collection>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default PatientList;