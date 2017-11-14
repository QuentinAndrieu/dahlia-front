import { updateUser } from '../actions/user.action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UserForm  from '../components/user-form.component';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
    user: state.user.user,
    fetched: state.user.fetched
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateUser: updateUser
    }, dispatch)
);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserForm));
