/* eslint-disable */
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

//  google oauth stuff
// '/auth/google/callback' is the callback route being used for handle user data coming back from google

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id })
      .then((existingUser)=> {
        if (existingUser){
          // user is already in db
        } else {
          // user is not in db
          new User({ googleId: profile.id }).save();
        }
      })
      // console.log('access token', accessToken);
      // console.log('refresh Token', refreshToken);
      // console.log('profile ', profile);
      // console.log(done);
    }
  )
);
