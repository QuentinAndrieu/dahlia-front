import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';


class Calendar extends Component {


    componentWillMount() {
        BigCalendar.setLocalizer(
            BigCalendar.momentLocalizer(moment)
        );
    }

    formatAppointments(appointments) {
        const formatAppointments = appointments.map((appointment) => {
            appointment = {
                'title': appointment.title,
                'start': moment(appointment.date).toDate(),
                'end': moment(appointment.date).add(appointment.duration, 'm').toDate()
            }
            return appointment;
        });

        return formatAppointments;
    }

    render() {

        const calendar = {
            minHeight: '600px'
        }

        return (
            <div >
                <BigCalendar
                    style={calendar}
                    events={this.formatAppointments(this.props.appointments)}
                />
            </div>
        )
    }
}

export default Calendar;
