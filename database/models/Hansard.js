/* eslint-disable */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HansardSchema = new Schema({
  name: {
<<<<<<< HEAD
    type: String,
    text: true,
  },
  speech: {
    type: String,
=======
    type: String
  },
  speech: {
    type: String
>>>>>>> da07cec16079a0b7ba4c5548402f9c1e19fe6076
  }
});
const Hansard = mongoose.model('Hansard', HansardSchema);

module.exports = Hansard;
