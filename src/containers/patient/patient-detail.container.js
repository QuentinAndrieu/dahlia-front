import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PatientDetail from './patient-detail.component';
import { withRouter } from 'react-router-dom';
import { setTitle } from '../../actions/router.action';
import { updateToTrashPatient } from '../../actions/patient.action';
import { addAppointment, updateToTrashAppointment } from '../../actions/appointment.action';
import FilterService from '../../service/filter.service';

const filterService = new FilterService();

const mapStateToProps = (state, ownProps) => ({
    patient: filterService.getPatient(ownProps.match.params.id, state.user.user.patients)
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        setTitle: setTitle,
        updateToTrashPatient: updateToTrashPatient,
        addAppointment: addAppointment,
        updateToTrashAppointment: updateToTrashAppointment
    }, dispatch)
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PatientDetail));
