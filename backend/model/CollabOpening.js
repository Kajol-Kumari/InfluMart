const mongoose = require('mongoose');

const collabOpeningSchema = new mongoose.Schema({
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Brand',
    required: true
  },
  campaignType: String,
  earningCapacity: {
    min: Number,
    max: Number
  },
  campaignTimelines: String,
  minEligibilityCriteria: String,
  postInfo: String,
  productReviewInstructions: String,
  campaignSteps: String,
  compensationType: {
    type: String,
    enum: ['Barter', 'Cashback', 'Payout', 'Voucher'],
  },
  numberOfInfluencers: Number,
  brandDescription: String,
  photoUrl: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('CollabOpening', collabOpeningSchema);
