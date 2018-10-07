// Dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const db = require('./database/models');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

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
let billsRouter = express.Router();
billsRouter = require('./database/scraping/Bills')(billsRouter);

let eachMPPRouter = express.Router();
eachMPPRouter = require('./database/scraping/eachMPP')(eachMPPRouter);

let mppUrlRouter = express.Router();
mppUrlRouter = require('./database/scraping/MPPurls')(mppUrlRouter);

let hansardRouter = express.Router();
hansardRouter = require('./database/scraping/Hansard')(hansardRouter);

app.use('/bills', billsRouter);
app.use('/eachMPP', eachMPPRouter);
app.use('/mppUrl', mppUrlRouter);
app.use('/hansard', hansardRouter);
mongoose.connect('mongodb://localhost/lace-repo');
// database is called lace-repo, you can see from 'mongoose.connect' code above
// Scraping steps:
// **uncomment all the db files, sorry es6 compile issues (will ask Uzair)
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

//  google oauth stuff
// '/auth/google/callback' is the callback route being used for handle user data coming back from google
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    accessToken => {
      console.log(accessToken);
    }
  )
);

// this router handler will try to auth the user using passport and passing the passport strategy (defined above as googleStrategy} - CA notes
// code internal to googel oauth20 has some logic that thats authentics with a string of google will use this GoogleStrategy. -CA notes
// the scope is asking google to give access to the user profile and email. this is defined types, see docs for more -CA notes
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// Listen on port 3000
app.listen(PORT, () => {
  console.log('==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT);
});
