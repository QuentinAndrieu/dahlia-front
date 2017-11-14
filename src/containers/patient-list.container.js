import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PatientList from '../components/patient-list.component';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state) => ({
  patients: state.user.user.patients
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
  }, dispatch)
);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PatientList));
