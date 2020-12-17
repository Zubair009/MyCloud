const MyCloud = artifacts.require("MyCloud");

module.exports = function(deployer) {
  deployer.deploy(MyCloud);
};
