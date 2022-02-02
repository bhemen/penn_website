const solanaWeb3 = require('@solana/web3.js');
//const spltoken = require('@solana/spl-token')
const url = "https://api.mainnet-beta.solana.com"
const connection = new solanaWeb3.Connection(url);

var usdc_address = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";

async function getSupply( tokenAddress ) {
	const tokenPK = new solanaWeb3.PublicKey(tokenAddress)

	const tokenInfo = await connection.getTokenSupply(tokenPK)
	const supply = Number(tokenInfo.value.amount) / Math.pow( 10, tokenInfo.value.decimals )
	//const supply = Number(tokenInfo.value.amount) 

	console.log( supply )
}

getSupply(usdc_address)

/*
let account = connection.getAccountInfo(usdc_address);

account.then( data => { console.log(data); } );

let supply = connection.getTokenSupply(usdc_address)

supply.then( data => { console.log(data); } );
*/

/*
var mintInfo = await token.getMintInfo()
await mintInfo
var totalSupply = mintInfo.supply
*/

/*
resp = web3.get_account_info(usdc_address)
print( json.dumps( resp, indent=2 ) )
*/

