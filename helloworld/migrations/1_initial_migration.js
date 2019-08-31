
const Migrations = artifacts.require("Migrations");
const helloworld = artifacts.require("../contracts/helloworld.sol");


module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(helloworld);
};
