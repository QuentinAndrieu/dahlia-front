import { fetchUser } from '../actions/user.action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/app.component';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    fetchUser: fetchUser
  }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(App);