const { ethers } = require("ethers");
require("dotenv").config();
const leanZnftContract = require("../utils/certificate-nft-abi.json");

module.exports = async function () {
  const CONTRACT_ADDRESS = "0x6439B124574BC91A45575F7a111745CFe59b2A17";

  const NodeUrl = process.env.QUICKNODE_API_KEY_URL;

  const privateKey = process.env.GOERLI_PRIVATE_KEY;

  const provider = new ethers.JsonRpcProvider(NodeUrl);
  const wallet = new ethers.Wallet(privateKey, provider);

  const contract = new ethers.Contract(
    CONTRACT_ADDRESS,
    leanZnftContract.abi,
    wallet
  );

  return contract;
};
