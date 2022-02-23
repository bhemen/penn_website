---
title: Stablecoins
layout: page
---

<div id="stablecoin_table" class='leftbox'>
<table>
<tr>
	<td>
		Ethereum Block Height
	</td>
	<td>
		<span id="eth_block_num"></span> 
	</td>
</tr>
<tr>
	<td>
		Ethereum USDC Supply
	</td>
	<td>
		<span id="eth_usdc_supply"></span> 
	</td>
</tr>
<tr>
	<td>
		Algorand USDC Supply
	</td>
	<td>
		<span id="algorand_usdc_supply"></span> 
	</td>
</tr>
<tr>
	<td>
		Avalanche USDC Supply
	</td>
	<td>
		<span id="avalanche_usdc_supply"></span> 
	</td>
</tr>
<tr>
	<td>
		Stellar USDC Supply
	</td>
	<td>
		<span id="stellar_usdc_supply"></span> 
	</td>
</tr>
<tr>
	<td>
		Solana USDC Supply
	</td>
	<td>
		<span id="sol_usdc_supply"></span> 
	</td>
</tr>
<tr>
	<td>
		Tron USDC Supply
	</td>
	<td>
		<span id="tron_usdc_supply"></span> 
	</td>
</tr>
</table>
</div>

<div id = "supplychart" class="rightbox" style = "width: 550px; height: 400px; margin: 0 auto"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/stellar-sdk/10.0.1/stellar-sdk.min.js"></script>
<script src="https://unpkg.com/algosdk@1.13.1/dist/browser/algosdk.min.js" integrity="sha384-0BSEzBpLxqFWYBI+sOGhv3W91/wPf+jFwCiuXNrC52XZav2qb3Rz+pfq3AFI0CrL" crossorigin="anonymous" ></script>
<script src="https://unpkg.com/@solana/web3.js@latest/lib/index.iife.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.7.0/web3.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/tronweb@3.2.6/dist/TronWeb.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/eosjs-api@7.0.4/lib/eos-api.min.js" crossorigin="anonymous"></script>
<script src = "https://code.highcharts.com/highcharts.js"></script>
<script src="{{ site.baseurl }}/assets/js/eth_stablecoins.js" type="text/javascript"></script>
<script src="{{ site.baseurl }}/assets/js/sol_stablecoins.js" type="text/javascript"></script>
<script src="{{ site.baseurl }}/assets/js/stellar_stablecoins.js" type="text/javascript"></script>
<script src="{{ site.baseurl }}/assets/js/tron_stablecoins.js" type="text/javascript"></script>
<script src="{{ site.baseurl }}/assets/js/avalanche_stablecoins.js" type="text/javascript"></script>
<script src="{{ site.baseurl }}/assets/js/algorand_stablecoins.js" type="text/javascript"></script>
<!-- <script src="{{ site.baseurl }}/assets/js/eos_stablecoins.js" type="text/javascript"></script> -->
<script src="{{ site.baseurl }}/assets/js/usdc_chart.js" type="text/javascript"></script>

