const express = require('express');
const bodyParser = require('body-parser');

const session = require('./middleware/session');
const passport = require('./middleware/passport');
const router = require('./routes/routes.js');
const reactRoutes = require('./routes/reactRoutes.js');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session);
app.use(passport.initialize());
app.use(passport.session());

const reactApp = express.static(`${__dirname}/../client/public`);
reactRoutes.forEach(route => app.use(route, reactApp));

app.use('/', router);

const PORT = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(PORT, () => console.log('listening to port ${PORT}'));
}

module.exports = app;