import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UserList from '../components/user-list.component';
import { withRouter } from 'react-router-dom';
import { setTitle } from '../actions/router.action';
import { fetchAllUsers } from '../actions/user.action';


const mapStateToProps = (state) => ({
  users: state.admin.users
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    setTitle: setTitle,
    fetchAllUsers: fetchAllUsers
  }, dispatch)
);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserList));
