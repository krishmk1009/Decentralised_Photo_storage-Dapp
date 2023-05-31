require("@nomicfoundation/hardhat-toolbox");

// Go to https://infura.io, sign up, create a new API key
// in its dashboard, and replace "KEY" with it
// const INFURA_API_KEY = "goerli.infura.io/v3/eb4f04bd081e443f9bbe4392c855c92a";

// Replace this private key with your Sepolia account private key
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const SEPOLIA_PRIVATE_KEY = "662d1dc77de016ebe9a3ea4a4caf076997694c53b132ac6e99cf8bd33cb8091e";
  ;

module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/e15f901714b945e292c3607159b5348f`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};


// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.17",
//   networks: {
//     hardhat: {
//       chainId: 1337,
//     },
//   },
//   paths: {
//     artifacts: "./client/src/artifacts",
//   },
// };