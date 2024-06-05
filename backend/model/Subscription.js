const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true},
  plan: { type: String, required: true },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, required: true },
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription;
