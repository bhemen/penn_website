---
---

//const solanaWeb3 = require('./@solana/web3.js');
//const spltoken = require('@solana/spl-token')
const solanaUrl = "https://api.mainnet-beta.solana.com"
const solanaConnection = new solanaWeb3.Connection(solanaUrl);

function displayAtId(id,data) {
	document.getElementById(id).innerHTML = 'loading';
	try {
		document.getElementById(id).innerHTML = data;	
	} catch (error) {
		alert( error )
	}

}

var solanaUSDCAddress = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";

async function getSolanaSupply( tokenAddress ) {
	const tokenPK = new solanaWeb3.PublicKey(tokenAddress)

	const tokenInfo = await solanaConnection.getTokenSupply(tokenPK)
	const supply = Number(tokenInfo.value.amount) / Math.pow( 10, tokenInfo.value.decimals )
	//const supply = Number(tokenInfo.value.amount) 

	return supply
}

sol_usdc_supply = getSolanaSupply(solanaUSDCAddress)
sol_usdc_supply.then( data => { displayAtId('sol_usdc_supply',data ); } );

