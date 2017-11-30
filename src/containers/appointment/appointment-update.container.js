import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppointmentForm from '../../components/appointment/appointment-form.conponent';
import { withRouter } from 'react-router-dom';
import { setTitle } from '../../actions/router.action';
import { updateAppointment } from '../../actions/appointment.action';

const mapStateToProps = (state, ownProps) => ({
    appointment: getAppointment(ownProps.match.params.id, state.user.user.appointments)
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        setTitle: setTitle,
        updateAppointment: updateAppointment
    }, dispatch)
);

function getAppointment(id, appointments) {
    const appointment = appointments.filter((appointment) => {
        return (appointment._id === id);
    });

    if (appointment[0]) {
        return appointment[0];
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppointmentForm));