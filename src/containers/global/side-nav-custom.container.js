import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SideNavCustom from './side-nav-custom.component';
import { withRouter } from 'react-router-dom';
import { setJWTToken } from '../../actions/authentification.action';

const mapStateToProps = (state) => ({
  username: state.user.user.username
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    setJWTToken: setJWTToken
  }, dispatch)
);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideNavCustom));