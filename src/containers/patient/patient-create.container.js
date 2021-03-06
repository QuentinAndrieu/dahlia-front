import { addPatient } from '../../actions/patient.action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PatientCreate from './patient-create.component';
import { withRouter } from 'react-router-dom';
import { setTitle } from '../../actions/router.action';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        addPatient: addPatient,
        setTitle: setTitle
    }, dispatch)
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PatientCreate));
