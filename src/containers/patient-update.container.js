import { updatePatient } from '../actions/patient.action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PatientForm from '../components/patient-form.component';
import { withRouter } from 'react-router-dom';
import { setTitle } from '../actions/router.action';

const mapStateToProps = (state) => ({
    patients: state.user.user.patients
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        updatePatient: updatePatient,
        setTitle: setTitle
    }, dispatch)
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PatientForm));
