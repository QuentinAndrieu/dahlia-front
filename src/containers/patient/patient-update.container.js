import { updatePatient } from '../../actions/patient.action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PatientUpdate from './patient-update.component';
import { withRouter } from 'react-router-dom';
import { setTitle } from '../../actions/router.action';
import moment from 'moment';

const mapStateToProps = (state, ownProps) => ({
    patient: getPatient(ownProps.match.params.id, state.user.user.patients)
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        updatePatient: updatePatient,
        setTitle: setTitle
    }, dispatch)
);

function getPatient(id, patients) {
    const patient = patients.filter((patient) => {
        return (patient._id === id);
    });

    if (patient[0]) {
        const formatBirthday = moment(patient[0].birthday).format('L');

        const patientUpdated = {
            ...patient[0],
            birthday: formatBirthday
        };

        return patientUpdated;
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PatientUpdate));
