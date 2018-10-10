const express = require('express');
const passport = require('passport');
const requireLogin = require('../middlewares/requireLogin');
//
const eachMPP = require('../database/models/eachMPP');
const hansard = require('../database/models/Hansard');
const mppqueenparks = require('../database/models/mppQueenPark');
//
module.exports = app => {
  let billsRouter = express.Router();
  billsRouter = require('../database/scraping/Bills')(billsRouter);

  let eachmppRouter = express.Router();
  eachmppRouter = require('../database/scraping/eachMPP')(eachmppRouter);

  let mppUrlRouter = express.Router();
  mppUrlRouter = require('../database/scraping/MPPurls')(mppUrlRouter);

  let hansardRouter = express.Router();
  hansardRouter = require('../database/scraping/Hansard')(hansardRouter);

  app.use('/bills', billsRouter);
  app.use('/eachmpp', eachmppRouter);
  app.use('/mppUrl', mppUrlRouter);
  app.use('/hansard', hansardRouter);
  app.use('/api/mppName/:name', (req, res) => {
    eachMPP
      .find({ $text: { $search: req.params.name } })
      .then(dbModel => {
        res.json(dbModel);
        console.log(dbModel);
      })
      .catch(err => {
        console.error(err);
        res.status(422).json(err);
      });
  });

  app.use('/api/hansard/:name', (req, res) => {
    hansard
      .find({ $text: { $search: 'ford' } })
      .then(speech => {
        res.json(speech);
      })
      .catch(err => {
        console.error(err);
        res.status(422).json(err);
      });
  });

  // app.get('/MPP/:name', (req, res) => {
  //   const { name } = req.params;
  //   console.log(name);
  //   res.send(name);
  // });
  // app.post('/MPP/:name', (req, res) => {
  //   const { name } = req.params;
  //   console.log(name);
  //   res.send(name);
  // });
};
