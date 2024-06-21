const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true},
  plan: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String},
  isFree: { type: Boolean, required: true }, // Flag to denote if it's a free subscription
  amount: { type: String, }, // Payment amount, applicable if it's a charged subscription
  paymentMode: { type: String }, // Mode of payment (e.g., credit card, PayPal)
  transactionDate: { type: String },
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription;
