var Web3 = require('web3');
var provider = 'HTTP://127.0.0.1:7545';
var web3Provider = new Web3.providers.HttpProvider(provider);
var web3 = new Web3(web3Provider);
web3.eth.getBlockNumber().then((result) => {
  console.log('Latest Ethereum Block is ', result);
});
