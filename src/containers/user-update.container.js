import { updateUser } from '../actions/user.action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UserForm  from '../components/user-form.component';


const mapStateToProps = (state) => ({
    user: state.user.user,
    fetched: state.user.fetched
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateUser: updateUser
    }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
