/* eslint-disable */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HansardSchema = Schema({
  name: {
    type: String,
  },
  speech: {
});

const Hansard = mongoose.model('Hansard', HansardSchema);

module.exports = Hansard;
