const mongoose = require('mongoose');

const collaborationSchema = new mongoose.Schema({
  brandId: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand', required: true },
  influencerId: { type: mongoose.Schema.Types.ObjectId, ref: 'InfluencerSignupRequest', required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  growthValue: { type: Number, required: true },
  postFrequency: { type: Number, required: true },
  engagementRate: { type: Number, required: true }, 
  minimumFollowers: { type: Number, required: true },
  minimumLikes: { type: Number, required: true },
  minimumPostFrequency: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Collaboration = mongoose.model('Collaboration', collaborationSchema);

module.exports = Collaboration;