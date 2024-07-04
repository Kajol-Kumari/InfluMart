const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId },
  receiver: { type: mongoose.Schema.Types.ObjectId },
  content: String,
  timestamp: { type: Date, default: Date.now, expires: '3d' }
});

module.exports = mongoose.model('Message', MessageSchema);