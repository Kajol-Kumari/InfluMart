const { JWT_SECRET_KEY, JWT_EXPIRES_IN, RESET_PASSWORD_TOKEN_SECRET, RESET_PASSWORD_TOKEN_EXPIRATION } = require("../config/dbConfig");
const Brand = require("../model/brandDbRequestModel");
const Influencer = require("../model/influencerDbRequestModel");
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');

// Use the existing SMTP configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.OTP_MAIL,
    pass: process.env.OTP_MAIL_PASSWORD,
  },
});

// Send reset password email
const sendResetEmail = (email, token) => {
  const mailOptions = {
    from: process.env.OTP_MAIL,
    to: email,
    subject: 'Password Reset',
    text: `You requested a password reset. Click the following link to reset your password: ${process.env.CLIENT_URL}/reset-password/${token}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending reset email:', error);
    } else {
      console.log('Reset email sent:', info.response);
    }
  });
};

// Generate a reset token
const generateResetToken = (userId) => {
  const resetToken = jwt.sign({ userId }, RESET_PASSWORD_TOKEN_SECRET, { expiresIn: RESET_PASSWORD_TOKEN_EXPIRATION });
  return resetToken;
};

// Forgot Password (Request Reset)
exports.forgotPassword = async (req, res) => {
  const { email, type } = req.body; // type can be 'brand' or 'influencer'

  try {
    const Model = type === 'brand' ? Brand : Influencer;
    const user = await Model.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const resetToken = generateResetToken(user._id);
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + RESET_PASSWORD_TOKEN_EXPIRATION;
    await user.save();

    sendResetEmail(email, resetToken);

    res.status(200).json({ message: 'Password reset email sent' });
  } catch (error) {
    console.error('Error during password reset request:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Reset Password
exports.resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    const decoded = jwt.verify(token, RESET_PASSWORD_TOKEN_SECRET);
    const { userId } = decoded;

    const user = await Brand.findById(userId) || await Influencer.findById(userId);

    if (!user || user.resetPasswordToken !== token || user.resetPasswordExpires < Date.now()) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.status(200).json({ message: 'Password reset successfully' });
  } catch (error) {
    console.error('Error during password reset:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
