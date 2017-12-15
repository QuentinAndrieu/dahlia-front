import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PatientForm from './patient-form.component';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

const mapStateToProps = (state, ownProps) => ({
    initialValues: ownProps.patient && formatPatient(ownProps.patient)
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
    }, dispatch)
);

function formatPatient(patient) {
    return { ...patient, birthday: moment(patient.birthday).format('YYYY-MM-DD') }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PatientForm));
