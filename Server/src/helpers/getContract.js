const { ethers } = require("ethers");
require("dotenv").config();
const leanZnftContract = require("../utils/certificate-nft-abi.json");

module.exports = async function () {
  const CONTRACT_ADDRESS = "0x4d29B7be09a3a975eaD9e803312Fec17E7Eb88EB";

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
