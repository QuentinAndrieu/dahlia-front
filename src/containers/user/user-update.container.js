import { updateUser } from '../../actions/user.action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UserUpdate  from '../../components/user/user-update.component';
import { withRouter } from 'react-router-dom';
import { setTitle } from '../../actions/router.action';

const mapStateToProps = (state) => ({
    user: state.user.user
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateUser: updateUser,
        setTitle: setTitle
    }, dispatch)
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserUpdate));
