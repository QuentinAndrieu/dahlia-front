import { fetchUser } from '../../actions/user.action';
import { setJWTToken, isAuthenticated } from '../../actions/authentification.action';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from './app.component';

const mapStateToProps = (state) => ({
  fetched: state.user.fetched,
  authenticated: state.authentification.authenticated
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    fetchUser: fetchUser,
    setJWTToken: setJWTToken,
    isAuthenticated: isAuthenticated,
  }, dispatch)
);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));