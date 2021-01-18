export const GET_RESERVES = `
query getReserves {
  reserves{
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
{
  ethereum {
    address(address: {is: "0xe4509F2ce63DED82e74e9e7E648c1A69e90cD2C4"}) {
      balances {
        value
        currency {
          address
          name
          tokenId
          tokenType
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