import { updatePatient } from '../../actions/patient.action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PatientUpdate from './patient-update.component';
import { withRouter } from 'react-router-dom';
import { setTitle } from '../../actions/router.action';
import FilterService from '../../service/filter';

const filterService = new FilterService();

const mapStateToProps = (state, ownProps) => ({
    patient: filterService.getPatient(ownProps.match.params.id, state.user.user.patients)
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        updatePatient: updatePatient,
        setTitle: setTitle
    }, dispatch)
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PatientUpdate));
