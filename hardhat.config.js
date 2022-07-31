/** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.9",
// };

require("@nomiclabs/hardhat-waffle")

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
     },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: ["c07a32b8d82c22ce85a6d22146a14ff989d3256aad9e988e8463e4dfb3d18f1b"]
    }
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}