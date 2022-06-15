var contract;

$(document).ready(function () {
	web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
	// smart contract address
	var address = "0xC09217E23A08314f0E9546Ee14E25fc06bE94479";

	//
	var abi = [
		{ inputs: [], stateMutability: "nonpayable", type: "constructor" },
		{
			inputs: [],
			name: "balance",
			outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
			name: "deposit",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [],
			name: "getBalance",
			outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
			name: "withdrawal",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
	];

	contract = new web3.eth.Contract(abi, address);

	contract.methods
		.getBalance()
		.call()
		.then(function (balance) {
			$("#balance").html(balance);
		});
});
$("#deposit").click(function () {
	var amt = 0;
	// amount variable typecasted to Integer from String
	amt = parseInt($("#amount").val());
	// fetching the various address of web3
	web3.eth
		.getAccounts()
		.then(function (accounts) {
			var acc = accounts[0]; // index of first address
			console.log("acc: " + accounts[0]);
			return contract.methods.deposit(amt).send({ from: acc });
		})
		.then(function (tx) {
			console.log(tx);
		})
		.catch(function (tx) {
			console.log(tx);
		});
});

$("#withdraw").click(function () {
	var amt = 0;
	// amount variable typecasted to Integer from String
	amt = parseInt($("#amount").val());
	// fetching the various address of web3
	web3.eth
		.getAccounts()
		.then(function (accounts) {
			var acc = accounts[0]; // index of first address
			console.log("acc: " + accounts[0]);
			return contract.methods.withdrawal(amt).send({ from: acc });
		})
		.then(function (tx) {
			console.log(tx);
		})
		.catch(function (tx) {
			console.log(tx);
		});
});
