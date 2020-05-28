require('babel-register');
require('babel-polyfill');
var HDWalletProvider = require("@truffle/hdwallet-provider");
var mnemonic = "gesture burst glad vendor silly faculty nerve mimic teach disease buzz soft";
module.exports = {
  networks: {
    development: {
       host: "127.0.0.1",
       port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/b290a50e9362493e8882b002b9e44eb3")
      },
      network_id: 3,
      gas: 3000000,
      gasPrice: 21
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion: "petersburg"
    }
  }
}
