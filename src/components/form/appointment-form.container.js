import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppointmentForm from './appointment-form.component';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    initialValues: ownProps.appointment
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
    }, dispatch)
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppointmentForm));
