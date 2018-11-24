/* eslint-disable */
// const passport = require('passport');
const express = require('express');
const eachMPP = require('../database/models/eachMPP');
const hansard = require('../database/models/Hansard');
const billVotes = require('../database/models/billVotes');
const bills = require('../database/models/Bills');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  const billsScraper = require('../database/scraping/Bills')
  const eachmppScraper = require('../database/scraping/eachMPP')
  const mppUrlScraper = require('../database/scraping/MPPurls')
  const hansardScraper = require('../database/scraping/Hansard')
  const populateCreate = require('../database/scraping/populateDB');
  // //this finds MPP from search bar, direct link
  app.use('/api/mppName/:name', requireLogin, (req, res) => {
    eachMPP
      .find({ $text: { $search: req.params.name } })
      .populate('addressEmailId')
      .then(dbModel => {
        res.json(dbModel);
      })
      .catch(err => {
        console.error(err);
        res.status(422).json(err);
      });
  });
  // //this finds speeches by name typed in Search Bar, pulled from URL
  app.use('/api/hansard/:name', requireLogin, (req, res) => {
    hansard
      .find({ $text: { $search: req.params.name } })
      .then(speech => {
        res.json(speech);
      })
      .catch(err => {
        console.error(err);
        res.status(422).json(err);
      });
  });
  // this finds votes by MPP for bills 2, 5, 27,typed in Search bar, pulled from URL
  app.use('/api/mppVotes/:name', requireLogin, (req, res) => {
    billVotes
      .find({ $text: { $search: req.params.name } })
      .then(votes => {
        res.json(votes);
      })
      .catch(err => {
        console.log(err.message);
        res.status(422).json(err);
      });
  });
  // this finds recent bills to display on landing page, October selected
  app.use('/api/recentBills', (req, res) => {
    bills
      .find({ $text: { $search: 'november' } }, req.query)
      .then(recent => {
        res.json(recent);
      })
      .catch(err => {
        console.error(err);
        res.status(422).json(err);
      });
  });
  // this finds recent bills to display on landing page, October selected
  app.use('/api/specificBills', requireLogin, (req, res) => {
    bills
      .find({ $or: [{ "title": "Bill 2, Urgent Priorities Act, 2018" }, { "title": "Bill 5, Better Local Government Act, 2018" }, { "title": "Bill 27, Waterways Examination Act, 2018" }] }, req.query)
      .then(specific => {
        res.json(specific);
      })
      .catch(err => {
        console.error(err);
        res.status(422).json(err);
      });
  });
};
