import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Root from '../components/root.component';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  fetched: state.user.fetched,
  fetching: state.user.fetching,
  hasFetch: state.user.hasFetch
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
  }, dispatch)
);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Root));