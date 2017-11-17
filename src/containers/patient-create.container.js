import { addPatient } from '../actions/patient.action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PatientForm from '../components/patient-form.component';
import { withRouter } from 'react-router-dom';
import { setTitle } from '../actions/router.action';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        addPatient: addPatient,
        setTitle: setTitle
    }, dispatch)
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PatientForm));
