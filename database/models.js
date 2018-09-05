const mongoose = require('mongoose');
const schemas = require('./schemas.js');

const Users = mongoose.model('CalendarlyUsers', schemas.UserSchema);
const Appointments = mongoose.model('CalendarlyAppointments', schemas.AppointmentSchema);

module.exports.Users = Users;
module.exports.Appointments = Appointments;
