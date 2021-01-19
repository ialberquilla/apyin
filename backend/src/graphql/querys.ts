export const GET_RESERVES = `
query getReserves {
  reserves(where: {symbol_in:["ETH", "USDT"]}){
    id
    symbol
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