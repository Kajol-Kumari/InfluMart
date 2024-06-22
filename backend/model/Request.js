const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand' },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'influencer' },
  requestedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Request', RequestSchema);