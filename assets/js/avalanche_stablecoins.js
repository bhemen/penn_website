---
---
//const avalanche = require("avalanche")o
//const Web3 = require("avalancheWeb3");
const ERC20ABI = require('human-standard-token-abi');

//import { ERC20ABI } from './eth_stablecoins.js';
avalanche_url = "https://api.avax.network/ext/bc/C/rpc";
const avalancheWeb3 = new Web3(avalanche_url)

avalanche_usdc_address = "0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e" //Native USDC
avalanche_usdce_address = "0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664" //Bridge wrapped USDC
avalanche_usdt_address = "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7" //Native USDT
avalanche_usdte_address = "0xc7198437980c041c805a1edcba50c1ce5db95118" //Bridge wrapped USDT

function displayAtId(id,data) {
	document.getElementById(id).innerHTML = 'loading';
	try {
		document.getElementById(id).innerHTML = data;	
	} catch (error) {
		alert( error )
	}

}

async function getAvalancheERC20Supply(tokenAddress) {
	var tokenContract = new avalancheWeb3.eth.Contract(ERC20ABI,tokenAddress)
	var decimal = await tokenContract.methods.decimals().call()
	var supply = await tokenContract.methods.totalSupply().call()
	var adjustedSupply= supply / Math.pow(10, decimal)
	var tokenName = tokenContract.methods.name()
	var tokenSymbol = tokenContract.methods.symbol()
	return adjustedSupply
}


avalanche_usdc_supply = getAvalancheERC20Supply(avalanche_usdc_address);
avalanche_usdc_supply.then( data => { displayAtId('avalanche_usdc_supply',data); } );
