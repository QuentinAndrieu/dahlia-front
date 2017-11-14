import { addPatient } from '../actions/patient.action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PatientForm from '../components/patient-form.component';


const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        addPatient: addPatient
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(PatientForm);
