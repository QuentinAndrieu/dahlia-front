import React, { Component } from 'react';
import { Row, Col, Card, Button } from 'react-materialize';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        const card = {
            height: '240px'
        };

        const addButton = {
            marginTop: '50px'
        };

        const homeIcon = {
            marginLeft: '15px'
        };

        return (
            <div className='home'>
                <Row>
                    <Col m={4} s={12}>
                        <Card className='cyan darken-4' textClassName='white-text' style={card}>
                            <span className='card-title white-text'><strong>Patients</strong></span>
                            <p>I am a very simple card.</p>
                            <center style={addButton}>
                                <Link to={`/patients`}>
                                    <Button floating large className='cyan accent-4' style={homeIcon} waves='light' icon='format_list_bulleted' />
                                </Link>
                                <Link to={`/patient/create`}>
                                    <Button floating large className='cyan accent-2' style={homeIcon} waves='light' icon='add' />
                                </Link>
                            </center>
                        </Card>
                    </Col>
                    <Col m={4} s={12}>
                        <Card className='indigo darken-4' textClassName='white-text' style={card}>
                            <span className='card-title white-text'><strong>Appointments</strong></span>
                            <p>I am a very simple card.</p>
                            <center style={addButton}>
                                <Button floating large className='indigo accent-4' style={homeIcon} waves='light' icon='format_list_bulleted' />
                                <Button floating large className='indigo accent-2' style={homeIcon} waves='light' icon='add' />
                            </center>
                        </Card>
                    </Col>
                    <Col m={4} s={12}>
                        <Card className='pink darken-4' textClassName='white-text' style={card}>
                            <span className='card-title white-text'><strong>Calendar</strong></span>
                            <p>I am a very simple card.</p>
                            <center style={addButton}>
                                <Button floating large className='pink accent-4' style={homeIcon} waves='light' icon='perm_contact_calendar' />
                            </center>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Home;
