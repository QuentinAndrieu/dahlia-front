import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SideNavCustom from './side-nav-custom.component';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
    }, dispatch)
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideNavCustom));
