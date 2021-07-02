/**
 * @type import('hardhat/config').HardhatUserConfig
 */

import 'hardhat-gas-reporter'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-ethers'

module.exports = {
  gasReporter : {
    enabled: true,
  },
  solidity: "0.8.5",
};
