//EosApi = require('eosjs-api') // 

//https://eosio.stackexchange.com/questions/733/how-can-i-find-out-the-api-endpoint-for-a-block-producer

options = {
  //httpEndpoint: "http://eos.newdex.one",
//  httpEndpoint: "http://eos.greymass.com",
 // httpEndpoint: "http://bp.whaleex.com",
//  httpEndpoint: "https://api.eosfinex.com",
//  httpEndpoint: "https://newpool.io",
//  httpEndpoint: "https://binance.com/en",
//  httpEndpoint: "https://eosnation.io",
//  httpEndpoint: "https://eoscannon.io",
  httpEndpoint: "https://api.eosn.io/", //One of the few nodes that support CORS
  verbose: false, // API logging
  fetchConfiguration: {
	credentials: 'same-origin'
	}
}

eos = EosApi(options)

async function getSupply(accountName,tokenSymbol) {
	stats = await eos.getCurrencyStats(accountName,tokenSymbol)
	supply = stats.USDT.supply
//	console.log(supply)
	return supply.split(' ')[0]
}

function displayAtId(id,data) {
	document.getElementById(id).innerHTML = 'loading';
	try {
		document.getElementById(id).innerHTML = data;	
	} catch (error) {
		alert( error )
	}

}

supply = getSupply('tethertether','USDT')
supply.then( result => { displayAtId('eos_usdt_supply',result); } );

