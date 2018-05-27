import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Setting  from './setting.component';
import { withRouter } from 'react-router-dom';
import { setTitle } from '../../actions/router.action';

const mapStateToProps = (state) => ({
    user: state.user.user
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        setTitle: setTitle
    }, dispatch)
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Setting));
