const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const medicaldetails = new mongoose.Schema({
  Blood: {
    type: String,
    required: true,
    trim: true,
  },
  Height: {
    type: String,
    required: true,
    trim: true,
  },
  Weight: {
    type: String,
    required: false,
    trim: true,
  },
  Gender: {
    type: String,
    required: false,
    trim: true,
  },
});

module.exports = mongoose.model('medicaldetails', medicaldetails);
