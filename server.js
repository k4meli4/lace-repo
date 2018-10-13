// Dependencies
/* eslint-disable */
const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const path = require('path');
const bodyParser = require('body-parser');
//
const mongoose = require('mongoose');
const arrayNames = require('./database/seeds/arrayNames');
// const eachMPP = require('./database/models/eachMPP');
// const hansard = require('./database/models/Hansard');
const mppconstituenciesSeed = require('./database/seeds/mppconstituencies');
const mppconstituencies = require('./database/models/mppConstituency');
// const billVotes = require('./database/models/billVotes');
const billVotesSeed = require('./database/seeds/billVotes');
// const bills = require('./database/models/Bills');
const votingStatsSeed = require('./database/seeds/votingStats');
const votingStats = require('./database/models/votingStats');
const keys = require('./config/keys');
// const db = require('./database/models');
require('./database/models/User');
require('./services/passport');

// End Of Dependencies

// Initialize Express
const app = express();
const PORT = process.env.PORT || 8080;
// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// mongoose.connect('mongodb://localhost/lace-repo');

// the setup for passport to use the cookiesssss
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());
// passport routes
require('./routes/authRoutes')(app);
require('./routes/mppRoutes')(app);

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);


// connecting to mlab
// database is called lace-repo, you can see from 'mongoose.connect' code above
// Scraping steps:

// 1) connect to your mongoDB
// 2) yarn start (this is development start, uses nodemon)
// 3) let React app load (loads on 3000)
// 4) open a new tab in your browser
// 5a) to scrape bills: type http://localhost:8080/bills/scrape in browser
// 6) you'll get a "Scrape Complete" if things worked
// 7) must scrape mppUrl before each MPP. To scrape mppurl: type http://localhost:8080/mppUrl/scrape in browser
// 8) remidner, scrape mppUrl first. To scrape eachMPP: type http://localhost:8080/eachMPP/scrape in browser
// 9) to scrape hansard: type http://localhost:8080/hansard/scrape in browser
// 10) view collection in MongoDB in the lace-repo database

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// Listen on port 3000
app.listen(PORT, () => {
  console.log('==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT);
});
