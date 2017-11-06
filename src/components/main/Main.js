import React, { Component } from 'react';
import { Row, Col, Card, Button } from 'react-materialize';
import './Main.css';
import { Link } from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <div className='main'>
                <Row>
                    <Col m={4} s={12}>
                        <Card className='main-card cyan darken-4' textClassName='white-text'>
                            <span className='card-title white-text'><strong>Patients</strong></span>
                            <p>I am a very simple card.</p>
                            <center className='main-add-button'>
                                <Link to={`/patients`}>
                                    <Button floating large className='cyan accent-4 main-icon' waves='light' icon='format_list_bulleted' />
                                </Link>
                                <Link to={`/patient/form`}>
                                    <Button floating large className='cyan accent-2 main-icon' waves='light' icon='add' />
                                </Link>
                            </center>
                        </Card>
                    </Col>
                    <Col m={4} s={12}>
                        <Card className='main-card indigo darken-4' textClassName='white-text'>
                            <span className='card-title white-text'><strong>Appointments</strong></span>
                            <p>I am a very simple card.</p>
                            <center className='main-add-button'>
                                <Button floating large className='indigo accent-4 main-icon' waves='light' icon='format_list_bulleted' />
                                <Button floating large className='indigo accent-2 main-icon' waves='light' icon='add' />
                            </center>
                        </Card>
                    </Col>
                    <Col m={4} s={12}>
                        <Card className='main-card pink darken-4' textClassName='white-text'>
                            <span className='card-title white-text'><strong>Calendar</strong></span>
                            <p>I am a very simple card.</p>
                            <center className='main-add-button'>
                                <Button floating large className='pink accent-4 main-icon' waves='light' icon='perm_contact_calendar' />
                            </center>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Main;
