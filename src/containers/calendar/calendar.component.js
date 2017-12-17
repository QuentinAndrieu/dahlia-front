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

    componentDidMount() {
        this.props.setTitle('Calendar');
    }

    filterList(list) {
        const listUpdated = list.filter((item) => {
            return item.trash !== 'true';
        });

        return listUpdated;
    }

    formatAppointments(appointments) {
        const formatAppointments = this.filterList(appointments).map((appointment) => {
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
        return (
            <div >
                <BigCalendar
                    className="calendar"
                    events={this.formatAppointments(this.props.appointments)}
                />
            </div>
        )
    }
}

export default Calendar;
