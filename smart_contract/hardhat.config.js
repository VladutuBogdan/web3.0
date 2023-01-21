require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/qqP6XVJsulw_EKD4KdnFidSpLg5JewE3',
      accounts: [ '3ffed56222a4793d0f164f827ee9fd97e116f7d98017b7fc8cdf49deabefe5c0' ]
    }
  }
}
