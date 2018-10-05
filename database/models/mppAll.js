import { Schema as _Schema, model } from 'mongoose';

const Schema = _Schema;

const mppAllSchema = new Schema({
  Honorific: {
    type: String,
  },
  Name: {
    type: String,
    required: true,
  },
  OfficeType: {
    type: String,
    required: true,
  },
  Department: {
    type: String,
  },
  Suite: {
    type: String,
  },
  Street: {
    type: String,
    required: true,
  },
  City: {
    type: String,
    required: true,
  },
  Province: {
    type: String,
    required: true,
  },
  Country: {
    type: String,
    required: true,
  },
  PostalCode: {
    type: String,
    required: true,
  },
  EmailAddress: {
    type: String,
    required: true,
  },
  Telephone: {
    type: String,
    required: true,
  },
  Fax: {
    type: String,
  },
});
// This creates our model from the above schema, using mongoose's model method
const mppAll = model('mppAll', mppAllSchema);

export default mppAll;
