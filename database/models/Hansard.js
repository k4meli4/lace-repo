/* eslint-disable */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HansardSchema = Schema({
  name: {
    type: String,
    text: true,
  },
  speech: {
    type: String,
  }
});

const Hansard = mongoose.model('Hansard', HansardSchema);

module.exports = Hansard;
