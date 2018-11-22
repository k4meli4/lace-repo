const express = require('express');
const arrayNames = require('../database/seeds/arrayNames');
const eachMPP = require('../database/models/eachMPP');
const hansard = require('../database/models/Hansard');
const billVotes = require('../database/models/billVotes');
const bills = require('../database/models/Bills');


module.exports = app => {
    app.get(
      '/auth/google',
      passport.authenticate('google', {
        scope: ['profile', 'email'],
      })
    );
  
    app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
      res.redirect('/test');
    });
  
    app.get('/api/logout', (req, res) => {
      req.logout();
      res.redirect('/');
    });
  
    app.get('/api/current_user', (req, res) => {
      res.send(req.user);
    });
  };