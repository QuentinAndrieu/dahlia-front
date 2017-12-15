import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppointmentUpdate from './appointment-update.component';
import { withRouter } from 'react-router-dom';
import { setTitle } from '../../actions/router.action';
import { updateAppointment } from '../../actions/appointment.action';
import FilterService from '../../service/filter';

const filterService = new FilterService();

const mapStateToProps = (state, ownProps) => ({
    appointment: filterService.getAppointment(ownProps.match.params.id, state.user.user.appointments)
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        setTitle: setTitle,
        updateAppointment: updateAppointment
    }, dispatch)
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppointmentUpdate));