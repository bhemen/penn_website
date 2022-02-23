async function createSupplyChart(chart_data) {

	alert( JSON.stringify(chart_data) ) 	

	const chart = Highcharts.chart('supplychart', {
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type: 'pie'
		},
		title: {
			text: 'USDC Distribution'
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		accessibility: {
			point: {
				valueSuffix: '%'
			}
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: true,
					format: '<b>{point.name}</b>: {point.percentage:.1f} %'
				}
			}
		},
		series: [{
			name: 'Platform',
			colorByPoint: true,
			data: chart_data
		}]
	});
}

//window.eth_usdc_supply.then( data => { alert( "ETH " + data ) } );
//window.stellar_usdc_supply.then( data => { alert( "Stellar " + data ) } );

async function createUSDCChart() {

	var supplies = await Promise.all([eth_usdc_supply,stellar_usdc_supply,sol_usdc_supply,tron_usdc_supply,avalanche_usdc_supply,algorand_usdc_supply])
	var platforms = ['Ethereum','Stellar','Solana','Tron','Avax','Algorand']	

	chart_data = []
	for ( var i=0; i<supplies.length; i++ ) {
		chart_data.push( { 'name': platforms[i], 'y': supplies[i] } );
	}

	//alert( JSON.stringify(chart_data) ) 	

	createSupplyChart( chart_data )

}

document.addEventListener('DOMContentLoaded', function () {
	createUSDCChart();
});
