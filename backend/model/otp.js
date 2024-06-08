const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    otp: { type: String, required: true },
    otpExpires: { type: Date, required: true }
});

const OTP = mongoose.model('OTP', otpSchema);

module.exports = OTP;
