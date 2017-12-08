import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AdminList from './admin-list.component';
import { withRouter } from 'react-router-dom';
import { setTitle } from '../../actions/router.action';


const mapStateToProps = (state) => ({
  users: state.admin.users,
  patients: state.admin.patients,
  appointments: state.admin.appointments
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    setTitle: setTitle
  }, dispatch)
);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminList));
