require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  apiKey: process.env.API_KEY,
  networks: {
    matic: {
      url: process.env.QUICKNODE_API_KEY_URL,
      chainId: 80001,
      accounts: [process.env.GOERLI_PRIVATE_KEY],
      gasPrice: 50000000000,
      saveDeployments: true,
    },
  },
};
