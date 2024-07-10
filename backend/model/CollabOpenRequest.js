const mongoose = require('mongoose');

const CollabOpenRequestSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'influencer' },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand' },
  requestedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CollabOpenRequest', CollabOpenRequestSchema);