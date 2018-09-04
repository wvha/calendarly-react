const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt-nodejs');
const db;
// const Promise = require('bluebird');
// todo: create db and fetchUser function

Promise.all(bcrypt);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
})

passport.use(new LocalStrategy((email, password, done) => {
  db.fetchUser(email)
    .then((user) => {
      if (user) {
        return bcrypt.compareAsync(password, user.password)
          .then(result => {
            if (result) {
              done(null, user);
            } else {
              done(null, false, {message: 'Incorrect password'});
            };
          })
          .catch(err => {
            throw err;
          })
      } else {
        done(null, false, {message: 'Email does not exist'})
      }
    })
  })
);