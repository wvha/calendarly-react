const mongoose = require('mongoose');
mongoose.promise = require('bluebird');

const DB_URL = process.env.DB_URL || 'mongodb://localhost/Calendarly';
mongoose.connect(DB_URL);

const db = mongoose.connection;
db.on('error', () => console.log('error connecting to database'));
db.once('open', () => console.log('connection successful!'));

module.exports = db;
