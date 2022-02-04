
//https://andelf.gitbook.io/tron/tron-by-example/transfer-trc20
//TronStationSDK = require('tron-station-sdk');
//const TronWeb = require('tronweb')

const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider('https://api.trongrid.io');
const solidityNode = new HttpProvider('https://api.trongrid.io');
const eventServer = new HttpProvider('https://api.trongrid.io');

const privateKey = 'da146374a75310b9666e834ee4ad0866d6f4035967bfc76217c5a495fff9f0d0';

const tronWeb = new TronWeb(
    fullNode,
    solidityNode,
    eventServer,
    privateKey
);

usdc_contract_address = "TEkxiTehnzSmSe2XqrBj4w32RUN966rdz8";

async function getTronERC20Supply(tokenAddress) {
    const {
        abi
    } = await tronWeb.trx.getContract(tokenAddress);
    // console.log(JSON.stringify(abi));

    var tokenContract = tronWeb.contract(abi.entrys, tokenAddress);
    var decimal = await tokenContract.methods.decimals().call()
    var supply = await tokenContract.methods.totalSupply().call()
    var adjustedSupply= supply / Math.pow(10, decimal)
    var tokenName = tokenContract.methods.name()
    var tokenSymbol = tokenContract.methods.symbol()
    return adjustedSupply
}

function displayAtId(id,data) {
	document.getElementById(id).innerHTML = 'loading';
	try {
		document.getElementById(id).innerHTML = data;	
	} catch (error) {
		alert( error )
	}

}

tron_usdc_supply = getTronERC20Supply(usdc_contract_address)
tron_usdc_supply.then( data => { displayAtId('tron_usdc_supply',data); } );
