const session = require('express-session');

module.exports = session({
  secret: 'calendarly',
  resave: true,
  saveUninitialized: true,
});
