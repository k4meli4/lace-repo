/* eslint-disable */
const cheerio = require('cheerio');
const axios = require('axios');
const cheerioTableParser = require('cheerio-tableparser');
<<<<<<< HEAD
<<<<<<< HEAD
const mongoose = require('mongoose');
const Bills = require('../models/Bills');
const keys = require('../../config/keys');

mongoose.connect('mongodb://localhost/lace-repo');

// mongoose.connect(
//   keys.mongoURI,
//   { useNewUrlParser: true }
// );
=======
const bills = require('../models/bills');
>>>>>>> 70c7ed2e59ca7cbd27ffeee643efeec0a47ff001
=======
const bills = require('../models/Bills');
>>>>>>> 9f4d815a6515a293cc329b0b12b99169ac1880a7

const billsRouter = router => {
  router.get('/scrape', (req, res) => {
    axios.get('https://www.ola.org/en/legislative-business/bills/current').then(response => {
      const $ = cheerio.load(response.data);
      cheerioTableParser($);
      $('.views-row').each((i, element) => {
        const result = {};
        result.data = [];
        result.title = $(element)
          .find('h2')
          .text();
        const URL = $(element)
          .find('a')
          .attr('href');
        result.URL = `https://www.ola.org${URL}`;
        result.MPP = $(element)
          .find('p')
          .text();
          result.data = $(element)
          .find('table')
          .parsetable(false, false, true);
        console.log(result.data);
        if (result.title && result.URL) {
          bills
            .create(result)
            .then(dbBills => {
              //console.log(dbBills);
            })
            .catch(err => res.json(err));
        }
      });
      // Send a "Scrape Complete" message to the browser
      res.send('Scrape Complete');
    });
  });
  return router;
};
module.exports = billsRouter;
