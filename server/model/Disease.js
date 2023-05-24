const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const disease = new mongoose.Schema({
  DiseaseName: {
    type: String,
    required: false,
    trim: true,
  },
  StartedDate: {
    type: Date,
    required: false,
    trim: true,
  },
  Remarks: {
    type: String,
    required: false,
    trim: true,
  },
  LoginId: {
    type: ObjectId,
    ref: 'login',
    required: false,
    trim: true,
  },
});

module.exports = mongoose.model('disease', disease);
