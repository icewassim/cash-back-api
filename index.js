const Web3 = require("web3");
const fs = require('fs');
const solc = require("solc");
const Tx = require('ethereumjs-tx')
const express = require('express');


const app = express();
const port = 4000;

app.listen(port, () =>
  console.info({ port }, '[info][Builder-backend][App_started]')
);


var provider = 'HTTP://127.0.0.1:7545';
var web3Provider = new Web3.providers.HttpProvider(provider);
var web3 = new Web3(web3Provider);
var account = '0x976a87B406CAfFe6A5163B8E5A1aF1717ff08CC7';

// web3.eth.getBlockNumber().then((result) => {
//   console.log('Latest Ethereum Block is ', result);
// });

var abiArray = JSON.parse(fs.readFileSync('wigoToken.json', 'utf-8'));
var contractAddress = '0x976a87B406CAfFe6A5163B8E5A1aF1717ff08CC7';
// check if you need the depoyed byteCode
var contractByteCode =
  '0x60806040526040518060400160405280600a81526020017f5749474f20546f6b656e000000000000000000000000000000000000000000008152506000908051906020019061004f929190610179565b506040518060400160405280600481526020017f5749474f000000000000000000000000000000000000000000000000000000008152506001908051906020019061009b929190610179565b506040518060400160405280600f81526020017f5749474f20546f6b656e2076312e300000000000000000000000000000000000815250600290805190602001906100e7929190610179565b503480156100f457600080fd5b50604051610d94380380610d948339818101604052602081101561011757600080fd5b810190808051906020019092919050505080600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550806003819055505061021e565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106101ba57805160ff19168380011785556101e8565b828001600101855582156101e8579182015b828111156101e75782518255916020019190600101906101cc565b5b5090506101f591906101f9565b5090565b61021b91905b808211156102175760008160009055506001016101ff565b5090565b90565b610b678061022d6000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80635a3b7e42116100665780635a3b7e421461022557806370a08231146102a857806395d89b4114610300578063a9059cbb14610383578063dd62ed3e146103e957610093565b806306fdde0314610098578063095ea7b31461011b57806318160ddd1461018157806323b872dd1461019f575b600080fd5b6100a0610461565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100e05780820151818401526020810190506100c5565b50505050905090810190601f16801561010d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101676004803603604081101561013157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506104ff565b604051808215151515815260200191505060405180910390f35b6101896105f1565b6040518082815260200191505060405180910390f35b61020b600480360360608110156101b557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506105f7565b604051808215151515815260200191505060405180910390f35b61022d610862565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561026d578082015181840152602081019050610252565b50505050905090810190601f16801561029a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102ea600480360360208110156102be57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610900565b6040518082815260200191505060405180910390f35b610308610918565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561034857808201518184015260208101905061032d565b50505050905090810190601f1680156103755780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103cf6004803603604081101561039957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506109b6565b604051808215151515815260200191505060405180910390f35b61044b600480360360408110156103ff57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b0d565b6040518082815260200191505060405180910390f35b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104f75780601f106104cc576101008083540402835291602001916104f7565b820191906000526020600020905b8154815290600101906020018083116104da57829003601f168201915b505050505081565b600081600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60035481565b6000600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111561064557600080fd5b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211156106ce57600080fd5b81600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555081600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108f85780601f106108cd576101008083540402835291602001916108f8565b820191906000526020600020905b8154815290600101906020018083116108db57829003601f168201915b505050505081565b60046020528060005260406000206000915090505481565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109ae5780601f10610983576101008083540402835291602001916109ae565b820191906000526020600020905b81548152906001019060200180831161099157829003601f168201915b505050505081565b600081600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610a0457600080fd5b81600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600560205281600052604060002060205280600052604060002060009150915050548156fea265627a7a723158204fa6795c35e0b970fbf749e9d55aed2788be677a8c63a1aefb92f7dcd6e16b9264736f6c63430005100032';
const MyContract = new web3.eth.Contract(abiArray.abi, contractAddress);
console.log('MyConract address', MyContract._address);

web3.eth.getGasPrice().then((gasPrice) => {
  const gasLimitHex = web3.utils.toHex(3000000);
  const gasPriceHex = web3.utils.toHex(gasPrice);
  // console.log('gasPrice = ', gasPrice);
  const tra = {
    gasPrice: gasPriceHex,
    gasLimit: gasLimitHex,
    data: contractByteCode,
    from: account,
  };

  // var tx = new Tx(tra);
  // tx.sign(key);
  const myAccount = web3.eth.accounts.privateKeyToAccount(
    '00cc8feec86c4b2f8a2b2699b22eec9a75007fe84f2411d91c0050b9042ae13b'
  )

  web3.eth.accounts
    .signTransaction(
      {
        to: '0x3eba6233c3e84f32c79fff8788c1d57fb0dfe662',
        value: '40',
        gas: 2000000,
      },
      '00cc8feec86c4b2f8a2b2699b22eec9a75007fe84f2411d91c0050b9042ae13b'
    )
    .then((myTransaction) => {
      console.log('---->> myTransaction', myTransaction);
      web3.eth.sendSignedTransaction(myTransaction.rawTransaction, console.log);
    });

  console.log('----> account', myAccount.address);
});



// var account = "Your Account #";
// var key = new Buffer('Your Account # Private key', 'hex')

// var abi = ABI of the Contract
// var bytecode = Bytecode of compiled contract
// var Contract = web3.eth.contract(abi)

//const gasPrice = web3.eth.gasPrice;
// console.log('------_> ', web3.eth)
// const gasPriceHex = web3.utils.toHex(gasPrice);
// console.log(' ---> gasPriceHex', gasPrice);
// const gasLimitHex = web3.toHex(3000000);


// console.log('----->>>', MyContract);
// var tra = {
//     gasPrice: gasPriceHex,
//     gasLimit: gasLimitHex,
//     data: bytecode,
//     from: account
// };

// var tx = new Tx(tra);
// tx.sign(key);

// var stx = tx.serialize();
// web3.eth.sendRawTransaction('0x' + stx.toString('hex'), (err, hash) => {
//     if (err) { console.log(err); return; }
//     console.log('contract creation tx: ' + hash);
// });