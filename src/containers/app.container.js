import { fetchUser } from '../actions/user.action';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/app.component';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    fetchUser: fetchUser
  }, dispatch)
);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));