// const passport = require('passport');
const arrayNames = require('../database/seeds/arrayNames');
const eachMPP = require('../database/models/eachMPP');
const hansard = require('../database/models/Hansard');
const billVotes = require('../database/models/billVotes');
const bills = require('../database/models/Bills');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
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
      .find({ $text: { $search: 'ford' } }, req.query)
      .then(votes => {
        res.json(votes);
      })
      .catch(err => {
        console.log(err.message);
        res.status(422).json(err);
      });
  });
  // this finds recent bills to display on landing page, October selected
  app.use('/api/recentBills', requireLogin, (req, res) => {
    bills
      .find({ $text: { $search: 'october' } }, req.query)
      .then(recent => {
        res.json(recent);
      })
      .catch(err => {
        console.error(err);
        res.status(422).json(err);
      });
  });
};
