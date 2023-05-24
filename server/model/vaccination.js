const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const vaccination = new mongoose.Schema({
  vaccineId: { type: ObjectId, ref: 'vaccine', trim: true, required: true },
  hospitalId: { type: ObjectId, ref: 'hospital', trim: true, required: true },
  LoginId: {
    type: ObjectId,
    ref: 'login',
    required: false,
    trim: true,
  },
  status: { type: String, enum: ['taken', 'not-taken'] },
  date: { type: Date, trim: true, required: true },
});

module.exports = mongoose.model('vaccination', vaccination);
