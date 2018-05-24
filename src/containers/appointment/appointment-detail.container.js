import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppointmentDetail from './appointment-detail.component';
import { withRouter } from 'react-router-dom';
import { updateToTrashAppointment } from '../../actions/appointment.action';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateToTrashAppointment: updateToTrashAppointment
    }, dispatch)
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppointmentDetail));
