import { fetchUser, fetchAllUsers } from '../../actions/user.action';
import { fetchAllPatients } from '../../actions/patient.action';
import { fetchAllAppointments } from '../../actions/appointment.action';
import { setJWTToken, isAuthenticated } from '../../actions/authentification.action';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from './app.component';

const mapStateToProps = (state) => ({
  fetched: state.user.fetched,
  title: state.router.title,
  authenticated: state.authentification.authenticated
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    fetchUser: fetchUser,
    setJWTToken: setJWTToken,
    isAuthenticated: isAuthenticated,
    fetchAllUsers: fetchAllUsers,
    fetchAllPatients: fetchAllPatients,
    fetchAllAppointments: fetchAllAppointments
  }, dispatch)
);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));