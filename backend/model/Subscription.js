const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true},
  plan: { type: String, required: true },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, required: true },
  isFree: { type: Boolean, required: true }, // Flag to denote if it's a free subscription
  amount: { type: Number }, // Payment amount, applicable if it's a charged subscription
  paymentMode: { type: String }, // Mode of payment (e.g., credit card, PayPal)
  transactionDate: { type: Date },
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription;
