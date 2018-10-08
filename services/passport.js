/* eslint-disable */
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');
//

//  this user here is not the same user as defined above.
// this user is the user data retuend from google in the promise
passport.serializeUser( (user, done) => {
  done(null, user.id);// done is a call back, null is a err that is passed in to check if everything is fine. user.id will id the user in FOLLOW UP REQUEST.
  // this user id is th id that is assigned by mongo and not google.

  // here we turn a mongoose model instance into an id
});

passport.deserializeUser( (id, done) => {
  User.findById(id)
  .then(user => {
    done(null, user);
  })

  //  here we turn an id into a mongoose model instance.
});

//  google oauth stuff
// '/auth/google/callback' is the callback route being used for handle user data coming back from google

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },

    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id })
      if (existingUser){
      // user is already in db
        console.log('This user has signed in with this id before. No New db record');
        return done(null, existingUser);
      }
      // user is not in db
        const user = await new User({ googleId: profile.id }).save()
        done(null, user);
    }
  )
);