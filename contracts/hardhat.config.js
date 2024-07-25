

require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["2392a237785f310d493de51b181634ff499ec4601d0004b6b310356559f5e872"], //
    },
  },
};
