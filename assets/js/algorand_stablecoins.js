//const algosdk = require('algosdk')
//const token = "B3SU4KcVKi94Jap2VXkK83xx38bsv95K5UZm2lab" //PS token
//const token = "IwMysN3FSZ8zGVaQnoUIJ9RXolbQ5nRY62JRqF2H" //Personal
const indexer_token = {
    'X-API-key': 'B3SU4KcVKi94Jap2VXkK83xx38bsv95K5UZm2lab',
}
//const token = 'IwMysN3FSZ8zGVaQnoUIJ9RXolbQ5nRY62JRqF2H'
const indexer_server = "https://mainnet-algorand.api.purestake.io/idx2"
const indexer_port = ""
const indexerClient = new algosdk.Indexer(indexer_token, indexer_server, indexer_port);

const usdc_id = 31566704

function displayAtId(id,data) {
	document.getElementById(id).innerHTML = 'loading';
	try {
		document.getElementById(id).innerHTML = data;	
	} catch (error) {
		alert( error )
	}

}

async function assetSupply(assetId) {
	const resp = await indexerClient.searchForAssets().limit(1).index(usdc_id).do()

	const asset_params = resp.assets[0].params

	const total = asset_params.total 
	const name = asset_params.name 

	const creator_acct = asset_params.creator
	const freeze_acct = asset_params.freeze
	const manager_acct = asset_params.manager
	var reserve_acct = asset_params.reserve

	if( reserve_acct == null ) {
		reserve_acct = creator_acct;
	}

	const reserve = await indexerClient.lookupAccountByID(reserve_acct).do()

	reserve_assets = reserve.account.assets
	reserve_bal = reserve_assets.find( reserve_assets => reserve_assets['asset-id'] == assetId ).amount
	console.log( reserve_bal )

	return total-reserve_bal
}

algorand_usdc_supply = assetSupply(usdc_id)

algorand_usdc_supply.then( data => { displayAtId('algorand_usdc_supply',data); } );
