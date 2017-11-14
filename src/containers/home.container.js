import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from '../components/home.component';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
  }, dispatch)
);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));