---
---

//const Web3 = require("web3");
//const BSCWeb3 = new Web3("https://cloudflare-eth.com");
const BSCWeb3 = new Web3('https://bsc-dataseed1.binance.org:443');
const ERC20ABI = require('human-standard-token-abi');
//const ERC20ABI = human-standard-token-abi
//const ERC20ABI = human_standard_token_abi
//const ERC20ABI = require('erc20.json');

function displayAtId(id,data) {
	document.getElementById(id).innerHTML = 'loading';
	try {
		document.getElementById(id).innerHTML = data;	
	} catch (error) {
		alert( error )
	}

}

async function getERC20Supply(tokenAddress) {
	var tokenContract = new BSCWeb3.eth.Contract(ERC20ABI,tokenAddress)
	var decimal = await tokenContract.methods.decimals().call()
	var supply = await tokenContract.methods.totalSupply().call()
	var adjustedSupply= supply / Math.pow(10, decimal)
	var tokenName = tokenContract.methods.name()
	var tokenSymbol = tokenContract.methods.symbol()
	return adjustedSupply
}

const bsc_usdc_address = "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d";
const bsc_usdt_address = "0x55d398326f99059ff775485246999027b3197955";

window.eth_usdc_supply = getERC20Supply(eth_usdc_address)
window.eth_usdc_supply.then( data => { displayAtId('eth_usdc_supply',data); } );

/*
var eth_usdt_supply = getERC20Supply(eth_usdt_address)
eth_usdt_supply.then( data => { displayAtId('eth_usdt_supply',data); } );
*/

