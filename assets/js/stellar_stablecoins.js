---
---
//var StellarSdk = require('stellar-sdk');

function displayAtId(id,data) {
	document.getElementById(id).innerHTML = 'loading';
	try {
		document.getElementById(id).innerHTML = data;	
	} catch (error) {
		alert( error )
	}

}

const stellarUrl = "https://horizon.stellar.org/";
//stellarUrl = "https://horizon-testnet.stellar.org/";
const server = new StellarSdk.Server(stellarUrl);

issuer = "GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN";
code = "USDC";

async function getStellarTokenSupply(code,issuer) {
	assets = await server.assets().forIssuer(issuer).forCode(code).call()

	asset = assets.records[0]	
	
	//console.log(asset)
	return Number(asset.amount)

}

stellar_usdc_supply = getStellarTokenSupply(code,issuer);
stellar_usdc_supply.then( data => { displayAtId('stellar_usdc_supply',data); } );
/*
usdc = new StellarSdk.Asset(code,issuer);
console.log(usdc)
*/
//usdc.then( data => { console.log(data); } );
