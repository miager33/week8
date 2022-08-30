require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",

  networks: {
    "goerli": {
       url: "https://opt-goerli.g.alchemy.com/v2/V9fPyJ7DwUrdExGg5sqpx0EJF5RCe7fa",
       accounts: ["aa41f14a4359225448656c93c0e5e8c854ef7a4fa34bf30280efa839ad6d4325"]
    }
  }

};
