import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Calendar from './calendar.component';
import { setTitle } from '../../actions/router.action';
import { updateAppointment } from '../../actions/appointment.action';

const mapStateToProps = (state) => ({
  appointments: state.user.user.appointments
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    setTitle: setTitle,
    updateAppointment: updateAppointment
  }, dispatch)
);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Calendar));