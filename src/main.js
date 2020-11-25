const {Blockchain, Transaction} = require('./blockchain')
const EC = require('elliptic').ec
const ec = new EC('secp256k1')

const myKey = ec.keyFromPrivate('0bfdf7574aebfe029425c07d97d11d858cbb660b59490a802a5617b0c5d1fafc')
const myWalletAddress = myKey.getPublic('hex')

let materCoin = new Blockchain()

const tx1 = new Transaction(myWalletAddress, 'address2', 10);
tx1.signTransaction(myKey)
materCoin.addTransaction(tx1)

console.log('\n Starting the miner...')
materCoin.minePendingTransactions(myWalletAddress)

console.log('\nBalance of Key is ', materCoin.getBalanceOfAddress(myWalletAddress))

console.log('Is chain valid? ', materCoin.isChainValid())