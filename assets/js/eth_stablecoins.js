---
---

const Web3 = require("web3");
const ERC20ABI = require('human-standard-token-abi');
const web3 = new Web3("https://cloudflare-eth.com");

function displayAtId(id,data) {
	document.getElementById(id).innerHTML = 'loading';
	try {
		document.getElementById(id).innerHTML = data;	
	} catch (error) {
		alert( error )
	}

}

async function ethBlockNum() {
	web3.eth.getBlockNumber().then( data => { displayAtId('eth_block_num',data); } );
}

async function getERC20Supply(tokenAddress) {
	var tokenContract = new web3.eth.Contract(ERC20ABI,tokenAddress)
	var decimal = await tokenContract.methods.decimals().call()
	var supply = await tokenContract.methods.totalSupply().call()
	var adjustedSupply= supply / Math.pow(10, decimal)
	var tokenName = tokenContract.methods.name()
	var tokenSymbol = tokenContract.methods.symbol()
	return adjustedSupply
}

usdc_address = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
usdt_address = "0xdac17f958d2ee523a2206206994597c13d831ec7";

async function USDCSupply() {
	getERC20Supply(usdc_address).then( data => { displayAtId('eth_usdc_supply',data); } );
}

async function USDTSupply() {
	getERC20Supply(usdt_address).then( data => { displayAtId('eth_usdt_supply',data); } );
}

ethBlockNum();
USDCSupply();
USDTSupply();
