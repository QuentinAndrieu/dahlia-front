import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UserForm from '../../components/user/user-form.component';
import { withRouter } from 'react-router-dom';
import { setTitle } from '../../actions/router.action';
import { updateUserById } from '../../actions/user.action';


const mapStateToProps = (state, ownProps) => ({
    user: getUser(ownProps.match.params.id, state.admin.users)
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateUserById: updateUserById,
        setTitle: setTitle
    }, dispatch)
);

function getUser(id, users) {
    const user = users.filter((user) => {
        return (user._id === id);
    });

    return user;
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserForm));