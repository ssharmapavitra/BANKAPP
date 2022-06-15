# BANKAPP

1. npm -v
2. node -v
3. npm install ganache-cli web3@1.2.6
4. .\node_modules\.bin\ganache-cli
Now, one Terminal will be busy running Ganache-CLI. Open new Terminal Window and Run
Following Commands.
5. Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
6. npm install -g http-server
7. npm install solc@0.6.4 

8. .\node_modules\.bin\solcjs --bin --abi Bank.sol

9. start node
node
Web3 = require('web3')
web3 = new Web3("http://localhost:8545")
web3.eth.getAccounts(console.log)

bytecode = fs.readFileSync('Bank_sol_Bank.bin').toString()
abi = JSON.parse(fs.readFileSync('Bank_sol_Bank.abi').toString())

deployedContract = new web3.eth.Contract(abi)

deployedContract.deploy({
data: bytecode}).send({
from: '',
gas: 1500000,
gasPrice: web3.utils.toWei('0.00003', 'ether')
}).then((newContractInstance) => {
deployedContract.options.address = newContractInstance.options.address
console.log(newContractInstance.options.address)
});
