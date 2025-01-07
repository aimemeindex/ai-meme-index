require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.18",
  networks: {
    base: {
      url: "https://rpc.base.org",
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  }
};
