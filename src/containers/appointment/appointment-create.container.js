import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppointmentCreate from './appointment-create.component';
import { withRouter } from 'react-router-dom';
import { addAppointment, updateToTrashAppointment } from '../../actions/appointment.action';

const mapStateToProps = (state, ownProps) => ({
    user: state.user.user
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        addAppointment: addAppointment,
        updateToTrashAppointment: updateToTrashAppointment
    }, dispatch)
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppointmentCreate));
