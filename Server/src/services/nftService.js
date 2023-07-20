const User = require("../models/User");

require("dotenv").config();
const certificateShot = require("../helpers/certificateShot");

const pinToPinata = require("../helpers/pinToPinata");

class UserNftService {
  async createUserWallet(data) {
    const user = new User({
      walletAddress: data.walletAddress,
      nftCertificates: [],
      nftsCollectibles: [],
    });

    try {
      const savedUser = await user.save();
      console.log("User wallet saved :", savedUser);
      return savedUser.walletAddress;
    } catch (error) {
      console.error(error);
    }
  }

  async mintCertificate(data) {
    const file = await certificateShot(data);

    // This now holds the tokenURI (metadata URL), not the image URL
    const tokenURI = await pinToPinata(file, data);

    console.log({ tokenURI });
    return tokenURI;
  }

  async getAllNftCertificates(data) {
    const user = await User.findOne({ walletAddress: data.walletAddress });
    if (user) {
      return user.nftCertificates;
    }
  }

  async getAllNftCollectibles(data) {
    const user = await User.findOne({ walletAddress: data.walletAddress });
    if (user) {
      return user.nftsCollectibles;
    }
  }

  async getUsers() {
    return await User.find({});
  }

  async getUser(userId) {
    const user = await User.findOne({ walletAddress: data.walletAddress });

    return user;
  }

  async getUsersCount() {
    return await User.find({}).count();
  }
}

module.exports = new UserNftService();
