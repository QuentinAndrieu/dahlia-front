import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Root from '../../components/global/root.component';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  fetching: state.user.fetching
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
  }, dispatch)
);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Root));