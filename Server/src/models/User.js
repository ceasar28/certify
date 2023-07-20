const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  walletAddress: {
    type: String,
    required: true,
  },
  nftCertificates: {
    type: [String],
  },
  nftCollectibles: {
    type: [String],
  },
});

// user model instance
const User = new mongoose.model("user", userSchema);

module.exports = User;
