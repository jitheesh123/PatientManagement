const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const signup = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
    trim: true,
  },
  PhoneNumber: {
    type: String,
    required: true,
    trim: true,
  },
  Address: {
    type: String,
    required: false,
    trim: true,
  },
  AadharNo: {
    type: String,
    required: false,
    trim: true,
  },
  Dob: {
    type: Date,
    required: false,
    trim: true,
  },
  PinCode: {
    type: Number,
    required: false,
    trim: true,
  },
  Country: {
    type: String,
    required: false,
    trim: true,
  },
  State: {
    type: String,
    required: false,
    trim: true,
  },
  Role: {
    type: String,
    enum: ['Admin', 'Patient'],
  },
  LoginId: {
    type: ObjectId,
    ref: 'login',
    required: false,
    trim: true,
  },
  MedicalId: {
    type: ObjectId,
    ref: 'medicaldetails',
    required: false,
    trim: true,
  },
});

module.exports = mongoose.model('signup', signup);
