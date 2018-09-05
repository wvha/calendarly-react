const Promise = require('bluebird');
const bcrypt = require('bcrypt-nodejs');

const schemas = require('./schemas.js');
const models = require('./models.js');
const db = require('./mongoose.js');

Promise.promisifyAll(bcrypt);

// -------- USER-ACCOUNT FUNCTIONS --------
db.fetchUser = (email) => models.Users.findOne({email: email});

db.saveUser = (obj) => {
  return db.fetchUser(obj.email)
    .then((email) => {
      if (email === null) {
        const saltRounds = 10;
        return bcrypt.genSaltAsync(saltRounds)
          .then(salt => {
            return bcrypt.hashAsync(obj.password, salt, null)
              .then((hash => {
                obj.password = hash;
                return models.Users.create({
                  name: obj.name,
                  username: obj.username,
                  password: obj.password,
                  email: obj.email,
                  schedule: {},
                }, (err) => {
                  console.log('error in setting up account: ', err);
                });
              })
            )
          })
      } else {
        return false;
      }
    })
}
