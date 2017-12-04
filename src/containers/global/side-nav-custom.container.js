import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SideNavCustom from './side-nav-custom.component';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  username: state.user.user.username,
  admin: state.user.user.role === 'Admin'
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
  }, dispatch)
);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideNavCustom));