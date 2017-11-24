import { fetchUser } from '../actions/user.action';
import { setJWTToken } from '../actions/authentification.action';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/app.component';

const mapStateToProps = (state) => ({
  fetched: state.user.fetched,
  title: state.router.title
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    fetchUser: fetchUser,
    setJWTToken: setJWTToken
  }, dispatch)
);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));