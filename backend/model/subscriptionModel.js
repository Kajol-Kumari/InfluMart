const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    duration: { type: Number, required: true }, // Duration in months
    cost: { type: Number, required: true },
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription;
