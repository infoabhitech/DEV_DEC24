require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

const fs = require('fs');
const keyData = fs.readFileSync('./p-key.txt', {encoding:'utf8', flag:'r'});

module.exports = {
  networks:{
    mainnet:{
      url:'https://polygon-mainnet.infura.io/v3/2Y9wmDTMkkF3sUmqXZC6AHW82A5',
      accounts:[keyData],
      chainId: 137,
      gasPrice: "auto"
    }
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};