import React, { Component } from 'react';
import LineChartCustom from '../../components/graph/line-chart.component';
import BarChartCustom from '../../components/graph/bar-chart.component';
import { Row, Col } from 'react-materialize';

class Statistic extends Component {

    constructor(props) {
        super(props);

        const onGoingYear = new Date().getFullYear();
        const pastYear = new Date().getFullYear() - 1;

        this.state = {
            lineChartDataSet: [{
                data: this.getIncomes(pastYear),
                label: 'Icomes from ' + pastYear,
            }, {
                data: this.getIncomes(onGoingYear),
                label: 'Icomes from ' + onGoingYear,
            }],
            barChartDataSet: [{
                data: this.getAppointments(pastYear),
                label: 'Appointment from ' + pastYear,
            }, {
                data: this.getAppointments(onGoingYear),
                label: 'Appointment from ' + onGoingYear,
            }]
        }
    }

    componentDidMount() {
        this.props.setTitle('statistic');
    }

    getIncomes(year) {
        let icomesArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        const appointmentsFilter = this.filterActiveAppoinmentPerYear(this.props.appointments, year);

        appointmentsFilter.forEach(appointment => {
            const month = new Date(appointment.createdAt).getMonth();
            icomesArray[month] += appointment.rate;
        });

        return icomesArray;
    }

    getAppointments(year) {
        let appointmentsArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        const appointmentsFilter = this.filterActiveAppoinmentPerYear(this.props.appointments, year);

        appointmentsFilter.forEach(appointment => {
            const month = new Date(appointment.createdAt).getMonth();
            appointmentsArray[month] += 1;
        });

        return appointmentsArray;
    }

    filterActiveAppoinmentPerYear(appointments, year) {
        return appointments.filter((appointment) => {
            const createdAt = new Date(appointment.createdAt);
            return createdAt.getFullYear() === year && !appointment.trash;
        });
    }

    render() {
        return (
            <div>
                <Row>
                    <Col s={12}>
                        <label>Icomes 2018</label>
                        <LineChartCustom dataSet={this.state.lineChartDataSet} />
                    </Col>
                    <Col s={12}>
                        <label>Appoinments 2018</label>
                        <BarChartCustom dataSet={this.state.barChartDataSet} />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Statistic;
