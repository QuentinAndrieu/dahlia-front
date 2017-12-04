import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './home.component';
import { withRouter } from 'react-router-dom';
import { setTitle } from '../../actions/router.action';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    setTitle: setTitle
  }, dispatch)
);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));