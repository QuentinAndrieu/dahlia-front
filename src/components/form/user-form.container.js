import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UserForm  from './user-form.component';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    initialValues: ownProps.user
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
    }, dispatch)
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserForm));
