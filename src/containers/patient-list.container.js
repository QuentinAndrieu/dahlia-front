import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PatientList from '../components/patient-list.component';

const mapStateToProps = (state) => ({
  patients: state.user.user.patients
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
  }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(PatientList);
