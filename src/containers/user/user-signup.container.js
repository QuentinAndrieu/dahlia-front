import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserSignUp from './user-signup.component';
import { withRouter } from 'react-router-dom';
import { setTitle } from '../../actions/router.action';
import { register, fetchJWTToken } from '../../actions/authentification.action';

const mapStateToProps = (state) => ({
    update: true
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        setTitle: setTitle,
        register: register,
        fetchJWTToken: fetchJWTToken
    }, dispatch)
);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserSignUp));