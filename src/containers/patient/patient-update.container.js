import { updatePatient } from '../../actions/patient.action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PatientUpdate from './patient-update.component';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        updatePatient: updatePatient
    }, dispatch)
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PatientUpdate));
