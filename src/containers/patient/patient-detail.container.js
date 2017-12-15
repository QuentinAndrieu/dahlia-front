import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PatientDetail from './patient-detail.component';
import { withRouter } from 'react-router-dom';
import { setTitle } from '../../actions/router.action';
import { removePatient } from '../../actions/patient.action';
import { addAppointment, removeAppointment } from '../../actions/appointment.action';
import FilterService from '../../service/filter';

const filterService = new FilterService();

const mapStateToProps = (state, ownProps) => ({
    patient: filterService.getPatient(ownProps.match.params.id, state.user.user.patients)
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        setTitle: setTitle,
        removePatient: removePatient,
        addAppointment: addAppointment,
        removeAppointment: removeAppointment
    }, dispatch)
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PatientDetail));
