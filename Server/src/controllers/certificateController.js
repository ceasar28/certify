const User = require("../models/User");
const { ethers } = require("ethers");
const certificateNFTABI = require("../utils/certificate-nft-abi.json");
const getContract = require("../helpers/getContract");

const {
  createUserWallet,
  mintCertificate,
  getAllNftCertificates,
  getAllNftCollectibles,
  getUsers,
  getUsersCount,
  getUser,
} = require("../services/nftService");

class UserNftController {
  async saveWallet(req, res) {
    // check if wallet exist
    const exist = await User.findOne({ walletAddress: req.body.walletAddress });
    if (exist) {
      return res.status(400).json({ message: "wallet already exist" });
    }

    const wallet = await createUserWallet(req.body);

    if (wallet) {
      return res.status(200).json({ wallet });
    }
  }

  async mintCertificate(req, res) {
    const receipient = req.body.walletAddress;
    const contract = await getContract();
    const tokenURI = await mintCertificate(req.body);
    let tokenID;
    console.log(req.body);
    console.log(receipient);

    // const gasEstimate = await contract.estimateGas.claimCertificate(
    //   receipient,
    //   tokenURI
    // );

    contract.on("CertificateClaimed", (tokenId) => {
      console.log("CertificateClaimed event emitted!");
      console.log("Token ID:", tokenId.toString());
      tokenID = tokenId.toString();
    });

    const transactionResponse = await contract.claimCertificate(
      receipient,
      tokenURI
      //   { gasLimit: Math.round(gasEstimate * 1.1) }
    );

    await transactionResponse.wait(); // Wait for transaction to be mined
    // console.log(transactionResponse);

    // connectedContract.on("NewEpicNFTMinted", (from, tokenId) => {
    //   console.log(from, tokenId.toNumber());
    //   alert(
    //     `Hey there! We've minted your NFT. It may be blank right now. It can take a max of 10 min to show up on OpenSea. Here's the link: <https://testnets.opensea.io/assets/goerli/${CONTRACT_ADDRESS}/${tokenId.toNumber()}>`
    //   );
    // });
    console.log(
      `https://mumbai.polygonscan.com/tx/${transactionResponse.hash}`
    );
    res.status(200).json({
      // transactionResponse,
      transactionHash: `https://mumbai.polygonscan.com/tx/${transactionResponse.hash}`,
      link: `https://testnets.opensea.io/assets/mumbai/0x6439B124574BC91A45575F7a111745CFe59b2A17/${tokenID}`,
    });
  }
}

module.exports = new UserNftController();
