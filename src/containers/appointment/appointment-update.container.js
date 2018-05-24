import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppointmentUpdate from './appointment-update.component';
import { withRouter } from 'react-router-dom';
import { updateAppointment } from '../../actions/appointment.action';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateAppointment: updateAppointment
    }, dispatch)
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppointmentUpdate));