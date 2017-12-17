import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppointmentCreate from './appointment-create.component';
import { withRouter } from 'react-router-dom';
import { setTitle } from '../../actions/router.action';
import { addAppointment, updateToTrashAppointment } from '../../actions/appointment.action';
import FilterService from '../../service/filter';

const filterService = new FilterService();

const mapStateToProps = (state, ownProps) => ({
    patient: filterService.getPatient(ownProps.match.params.id, state.user.user.patients)
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        setTitle: setTitle,
        addAppointment: addAppointment,
        updateToTrashAppointment: updateToTrashAppointment
    }, dispatch)
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppointmentCreate));
