export const GET_RESERVES =`
query getReserves {
  reserves{
    id
    symbol
  }
}
`;


export const GET_HISTORICAL_RATE =`
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