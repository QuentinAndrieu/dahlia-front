import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PatientDetail from '../components/patient-detail.component';
import { withRouter } from 'react-router-dom';
import { setTitle } from '../actions/router.action';

const mapStateToProps = (state) => ({
    patients: state.user.user.patients 
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        setTitle: setTitle
    }, dispatch)
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PatientDetail));
