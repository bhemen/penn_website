---
---

//const Web3 = require("web3");
//const ethWeb3 = new Web3("https://cloudflare-eth.com");
const ethWeb3 = new Web3("https://mainnet.infura.io/v3/ce1c19693f164090b212bc1f6932edf9")
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
	var tokenContract = new ethWeb3.eth.Contract(ERC20ABI,tokenAddress)
	var decimal = await tokenContract.methods.decimals().call()
	var supply = await tokenContract.methods.totalSupply().call()
	var adjustedSupply= supply / Math.pow(10, decimal)
	var tokenName = tokenContract.methods.name()
	var tokenSymbol = tokenContract.methods.symbol()
	return adjustedSupply
}

const eth_usdc_address = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
const eth_usdt_address = "0xdac17f958d2ee523a2206206994597c13d831ec7";

window.eth_usdc_supply = getERC20Supply(eth_usdc_address)
window.eth_usdc_supply.then( data => { displayAtId('eth_usdc_supply',data); } );

/*
var eth_usdt_supply = getERC20Supply(eth_usdt_address)
eth_usdt_supply.then( data => { displayAtId('eth_usdt_supply',data); } );
*/

var eth_block_num = ethWeb3.eth.getBlockNumber()
eth_block_num.then( data => { displayAtId('eth_block_num',data); } );
