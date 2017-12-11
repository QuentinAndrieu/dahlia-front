import { connect } from 'react-redux';
import { fetchJWTToken } from '../../actions/authentification.action';
import { fetchUser } from '../../actions/user.action';
import { bindActionCreators } from 'redux';
import UserSignIn from './user-signin.component';
import { withRouter } from 'react-router-dom';
import { setTitle } from '../../actions/router.action';

const mapStateToProps = (state) => ({
    authentification: state.authentification
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        fetchJWTToken: fetchJWTToken,
        fetchUser: fetchUser,
        setTitle: setTitle
    }, dispatch)
);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserSignIn));