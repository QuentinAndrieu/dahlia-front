import React, { Component } from 'react';
import { Row, Col, Card } from 'react-materialize';

class Home extends Component {

    componentDidMount() {
        this.props.setTitle('home');
    }

    render() {
        return (
            <Row>
                <Col  m={6} s={12}>
                    <h4>Manage your patient with Dahlia</h4>
                </Col>
                <Col m={6} s={12}>
                    <Card className="card-list-patient" textClassName="white-text">
                        <span className="card-title">Manage your patients</span>
                        Record your patient's detail, in a easy and secure way !
                    </Card>
                </Col>
                <Col className="offset-m6" m={6} s={12}>
                    <Card className="card-calendar" textClassName="white-text">
                        <span className="card-title">Calendar online</span>
                        Have a quick and simple look to your appointments !
                    </Card>
                </Col>
                <Col className="offset-m6" m={6} s={12}>
                    <Card className="card-statistic" textClassName="white-text">
                        <span className="card-title">Statistic automatic</span>
                        Keep track of your incomes, and number of appointments !
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default Home;
