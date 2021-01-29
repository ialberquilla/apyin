export const GET_RESERVES = `
query getReserves {
  reserves{
    id
    symbol
    decimals
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

export const GET_PRICE_HISTORY_ITEMS = `
  query getPriceHistoryItems ($timestamp: Int!, $asset: String!) {
  priceHistoryItems (
    orderBy: timestamp,
    orderDirection: asc,
    first:1000, 
    where: {
      asset_in: [$asset],
      timestamp_gt: $timestamp
    }
  ) {
    price
    timestamp
    id
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
