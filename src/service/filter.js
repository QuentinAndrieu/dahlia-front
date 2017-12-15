import moment from 'moment';

class Filter {

    getPatient(id, patients) {
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

    getAppointment(id, appointments) {
        const appointment = appointments.filter((appointment) => {
            return (appointment._id === id);
        });

        if (appointment[0]) {
            return appointment[0];
        }
    }
}

export default Filter;