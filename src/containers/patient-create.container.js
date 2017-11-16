import { addPatient } from '../actions/patient.action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PatientForm from '../components/patient-form.component';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        addPatient: addPatient
    }, dispatch)
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PatientForm));