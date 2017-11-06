import React, { Component } from 'react';
import { Collection, CollectionItem, Col, Row, Input } from 'react-materialize';
import './PatientList.css'



class PatientList extends Component {
  render() {
    return (
      <div className='patient-list'>
        <Row>
          <Col m={3} s={12}>
            <Row>
              <Input s={12} label="Search Patient" />
            </Row>
          </Col>

          <Col m={9} s={12}>
            <div className='patient-collection'>
              <Collection>
                <CollectionItem className='cyan-text' href='#'>Albert Dupont</CollectionItem>
                <CollectionItem className='cyan-text' href='#'>Albert Dupont</CollectionItem>
                <CollectionItem className='cyan-text' href='#'>Albert Dupont</CollectionItem>
                <CollectionItem className='cyan-text' href='#'>Albert Dupont</CollectionItem>
              </Collection>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default PatientList;