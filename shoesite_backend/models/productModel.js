const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  shoeName: {
    type: String,
    required: true,
  },

  shoeSize: {
    type: String,
    required: true,
  },
  shoeType: {
    type: String,
    required: true,
  },
  remainingItems: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("productdata", userSchema);
