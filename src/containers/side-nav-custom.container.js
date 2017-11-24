import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SideNavCustom from '../components/side-nav.component';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
  }, dispatch)
);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideNavCustom));