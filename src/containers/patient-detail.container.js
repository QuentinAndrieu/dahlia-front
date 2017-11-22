import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PatientDetail from '../components/patient-detail.component';
import { withRouter } from 'react-router-dom';
import { setTitle } from '../actions/router.action';
import { removePatient } from '../actions/patient.action';

const mapStateToProps = (state) => ({
    patients: state.user.user.patients 
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        setTitle: setTitle,
        removePatient: removePatient
    }, dispatch)
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PatientDetail));
