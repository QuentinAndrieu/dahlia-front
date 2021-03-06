import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Statistic from './statistic.component';
import { setTitle } from '../../actions/router.action';

const mapStateToProps = (state) => ({
  appointments: state.user.user.appointments
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    setTitle: setTitle,
  }, dispatch)
);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Statistic));