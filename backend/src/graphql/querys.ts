export const GET_RESERVES = `
query getReserves {
  reserves{
    id
    symbol
    decimals
    underlyingAsset
  }
}
`;


export const GET_HISTORICAL_RATE = `
query getHistoricalRate ($timestamp: Int!, $reserve: String!){
    reserveParamsHistoryItems (
        first:1000, 
        where: {
           reserve: $reserve
           timestamp_gt: $timestamp
        }
       orderBy: timestamp
       orderDirection: asc
    ) {
     id
       reserve{
       id
       symbol
     }
     liquidityRate
     timestamp
    } 
   }
`;

export const GET_HISTORICAL_ETH_PRICE = `
  query getHistoricalEthPrice ($timestamp: Int!) {
  usdEthPriceHistoryItems (
        first:1000, 
        where: {
           timestamp_gt: $timestamp
        }
       orderBy: timestamp
       orderDirection: asc
       ) {
    price
    timestamp
  }
}
`

export const GET_HISTORICAL_ALT_PRICE = `
  query getHistoricalAltPrices ($timestamp: Int!, $asset: String!) {
  priceHistoryItems (
    orderBy: timestamp,
    orderDirection: asc,
    first:1000,
    where: {
      asset: $asset,
      timestamp_gt: $timestamp
    }
  ) {
    timestamp
    price
  }
}
`

export const GET_HISTORICAL_BALANCES = `
query getHistoricalBalances ($address: String!){  
  ethereum {
    address(address: {is: $address}) {
      balances {
        value
        currency {
          name
          symbol
        }
        history {
          block
          timestamp
          transferAmount
          value
        }
      }
    }
  }
}`

export const GET_GAS_PRICE = `{
  query getGasPrice {
    prices(
      first:1
      orderDirection: desc
      orderBy: timestamp
      where:{
        assetPair_ends_with : "FastGas/Gwei"
      }
  ){
    id
    price
		timestamp    
  }
}`
