const VicenteToken = artifacts.require("VicenteToken");

module.exports = function (deployer) {
  deployer.deploy(VicenteToken);
};
