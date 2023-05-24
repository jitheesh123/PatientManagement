const mongoose = require('mongoose');

const enquiry = new mongoose.Schema({
  Name: { type: String, trim: true, required: true },
  Email: { type: String, trim: true, required: true },
  Message: { type: String, trim: true, required: true },
  status: {
    type: String,
    enum: ['read', 'unread'],
    default: 'unread',
  },
});

module.exports = mongoose.model('enquiry', enquiry);
