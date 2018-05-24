import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

const DragAndDropCalendar = withDragAndDrop(BigCalendar)

class Calendar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            events: this.formatAppointments(this.props.appointments),
        }

        this.moveEvent = this.moveEvent.bind(this);
    }

    moveEvent({ event, start, end }) {
        const { events } = this.state;
        const idx = events.indexOf(event);
        const updatedEvent = { ...event, start, end };
        const nextEvents = [...events];

        this.setState({
            events: nextEvents
        });

        nextEvents.splice(idx, 1, updatedEvent);

        this.props.updateAppointment(event._id, event.description, event.title, event.rate,
            event.duration, updatedEvent.start).then((id) => {
                window.M.toast({
                    html: 'Appointment updated',
                    classes: 'toast-custom',
                    displayLength: 1000
                });
            }).catch((err) => {
                window.M.toast({
                    html: 'Error during appointment update',
                    classes: 'toast-custom-error',
                    displayLength: 1000
                });
            })
    }

    componentWillMount() {
        BigCalendar.setLocalizer(
            BigCalendar.momentLocalizer(moment)
        );
    }

    undoMoveEvent() {
        alert('test');
    }

    componentDidMount() {
        this.props.setTitle('calendar');
    }

    filterList(list) {
        return list.filter((item) => {
            return !item.trash;
        });
    }

    formatAppointments(appointments) {
        return this.filterList(appointments).map((appointment) => {
            return {
                '_id': appointment._id,
                'title': appointment.title,
                'description': appointment.description,
                'rate': appointment.rate,
                'duration': appointment.duration,
                'date': appointment.date,
                'start': moment(appointment.date).toDate(),
                'end': moment(appointment.date).add(appointment.duration, 'm').toDate(),
            }
        });
    }

    render() {
        return (
            <DragAndDropCalendar
                className="calendar"
                selectable
                events={this.state.events}
                onEventDrop={this.moveEvent}
                defaultView="week"
            />
        )
    }
}

export default DragDropContext(HTML5Backend)(Calendar);
