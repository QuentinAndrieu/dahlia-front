import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PatientForm  from './patient-form.component';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    initialValues: ownProps.patient
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
    }, dispatch)
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PatientForm));
