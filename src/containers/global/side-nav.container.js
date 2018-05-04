import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SideNav from './side-nav.component';
import { withRouter } from 'react-router-dom';
import { setJWTToken } from '../../actions/authentification.action';

const mapStateToProps = (state, ownProps) => ({
    title: state.router.title
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        setJWTToken: setJWTToken
    }, dispatch)
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideNav));
