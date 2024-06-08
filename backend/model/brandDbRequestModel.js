const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    default: "N/A",
  },
  website: {
    type: String,
    default: "N/A",
  },
  description: {
    type: String,
    default: "N/A",
  }
});

const Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;
