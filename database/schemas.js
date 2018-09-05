const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: String,
  username: { type: String, unique: true },
  password: String,
  email: String,
  schedule: Object,
});

const ScheduleSchema = new mongoose.Schema({
  username: String,
  date: Date,
  year: Number,
  dayOfYear: Number,
  availableTimes: [],
  reservedTimes: []
});

const AppointmentSchema = new mongoose.Schema({
  owner: String,
  name: String,
  email: String,
  date: Date,
  time: Number,
  length: Number,
});

module.exports.UserSchema = UserSchema;
module.exports.ScheduleSchema = ScheduleSchema;
module.exports.AppointmentSchema = AppointmentSchema;


/*
notes:
user and appt schemas look good/necessary
schedule schema, not so much

example schedule object: 
{
  2018: {
    dayOfYear: {
      available: [
        [9, 1], [1500, 1700]
      ],
      appointments: [
        [930, 30], [1500, 15],
      ],
    }
  }

}
*/
