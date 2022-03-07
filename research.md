---
title: Research
layout: page
---

# Secure Multiparty Computation

Secure Multiparty Computation allows a groups of mutually distrustful data owners to collaboratively compute statistics 
on their private data, without revealing their underlying data to each other, or any outside party.  
MPC has been used to [execute a private auction without a trusted auctioneer](https://link.springer.com/chapter/10.1007/978-3-642-03549-4_20), [detect satellite collisions](https://link.springer.com/chapter/10.1007/978-3-319-44618-9_9) without requiring operators to share 
orbital information, [calculate payroll statistics across multiple companies in Boston](https://ieeexplore.ieee.org/abstract/document/7839796), [securely computing Genome-Wide Association Studies (GWAS)](https://www.nature.com/articles/nbt.4108), 
in the blockchain space secure multiparty computation is most often used in the form of [threshold signature schemes](https://www.unboundsecurity.com/blog/threshold-signature-schemes/), which is extremely useful for cross-blockchain communication, 
and [distributed key generation](https://medium.com/osmosis-community-updates/osmosis-updates-from-the-lab-ft-fetch-ai-superfluid-staking-bridges-feb-9-2022-94aafcb6632b), also have applications in the blockchain space.

Although MPC has the potential to facilate collaboration and cooperation, it is not widely used in practice, for two reasons: (1) it's hard to use, and (2) it's slow.  My research in the MPC space is focused on developing MPC protocols that can be 
easily used to solve real-world problems, and improving the performance of the underlying MPC algorithms.


# Blockchain

The blockchain space is overflowing with interesting research questions, but there is only so much time in the day, and 
three topics I'm most focused on now are: cross-chain interoperability, the stability of the financial networks being built by "[money legos](https://academy.shrimpy.io/post/what-is-defi-composability-an-introduction-to-money-legos)", 
and on-chain governance.

*Cross-chain interoperability*
Developing tools to improve cross-chain interoperability 
Secure multiparty computation protocols, most often threshold signature schemes can be used to build (somewhat) decentralized connections 
between blockchains.  This type of infrastructure has already been deployed by [Binance](https://www.binance.com/en/blog/all/binance-opensources-threshold-signature-scheme-library-398654406137536512), 
[Avalanche](https://medium.com/avalancheavax/avalanche-bridge-secure-cross-chain-asset-transfers-using-intel-sgx-b04f5a4c7ad1), [Ren](https://renproject.io/litepaper.pdf), and [Thorchain](https://github.com/thorchain/Resources/blob/master/Whitepapers/THORChain-TSS-Paper-June2020.pdf) among others.
Threshold signature schemes allow a group of trusted relayers to facilitate communication across existing blockchains.  Changin

*Stability of financial networks*

After the 2008 financial crisis, a [rich literature on the stability of financial networks](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3651864), trying to understand how 
financial interdependencies can amplify or dampen financial shocks.  The composability of different DeFi primitives has led to completely new (De)-Financial Networks, 
and it is critical to understand the contagion risk in these rapidly growing new networks.

*On-chain governance*

Voting mechanisms are being used in a variety of ways in the blockchain space
1. Determining the set of block producers in Proof-of-Stake chains like the [Cosmos hub](https://hub.cosmos.network/main/validators/overview.html) and most chains built using the Cosmos SDK
1. Managing DeFi platforms, e.g. [Maker](https://vote.makerdao.com/), [Compound](https://compound.finance/governance), [Uniswap](https://gov.uniswap.org/) and many others
1. Managing pooled investments in different spaces like [music](https://www.beetsdao.com/), [art](https://pleasr.org/#) and [many others](https://decrypt.co/88894/11-most-interesting-daos-of-2021)
How should we structure the voting mechanisms to effectively tap into the wisdom of the crowd?

If you're interested in learning more about the technical underpinnings of blockchains, I teach the Blockchain course in Penn's MCIT program ([MCIT 582](mcit582.html)).
For those who aren't eligible to take MCIT 582, I've put together a set of free [blockchain resources](blockchain_resources.html)

