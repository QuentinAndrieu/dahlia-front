import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthRoute from './auth-route.component';
import { withRouter } from 'react-router-dom';
import { isAuthenticated } from '../../actions/authentification.action';

const mapStateToProps = (state) => ({
  authenticated: state.authentification.authenticated,
  token: state.authentification.token
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    isAuthenticated: isAuthenticated
  }, dispatch)
);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthRoute));