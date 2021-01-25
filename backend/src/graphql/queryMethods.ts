import { GET_RESERVES, GET_HISTORICAL_RATE, GET_HISTORICAL_BALANCES } from './querys'
import { request } from 'graphql-request'
import config from '../config'
import { BalanceHistory, BalanceChanges } from '../interfaces/models'


export const getReserves = async () => {
    return request(config.GRAPH_API_URL, GET_RESERVES)
}


export const getHistoricalRate = async (reserve) => {
    let areData = true
    let timestamp = 0
    let total = []

    while (areData) {
        const variables = {
            timestamp,
            reserve
        }

        const result = await request(config.GRAPH_API_URL, GET_HISTORICAL_RATE, variables)
        await new Promise(resolve => setTimeout(resolve, 50));

        const reservesCount = result.reserveParamsHistoryItems.length
        areData = reservesCount > 0
        if (areData) timestamp = result.reserveParamsHistoryItems[reservesCount - 1].timestamp

        total = [...total, ...result.reserveParamsHistoryItems]
    }

    return total
}


export const getAccountHistory = async (address: string): Promise<BalanceHistory[]> => {
    const variables = {
        address
    }
    const response = await request(config.BIT_QUERY_URL, GET_HISTORICAL_BALANCES, variables)
    let balanceHistory: BalanceHistory[] = [];

    for (const token of response.ethereum.address[0].balances) {
        const tokenHistory: BalanceHistory = {
            actualValue: token.value,
            symbol: token.currency.symbol,
            missingAPY: 0,
            missingTokens: 0,
            balanceChanges: token.history.map(ele => {
                return {
                    block: ele.block,
                    timestamp: Date.parse(ele.timestamp) / 1000 as unknown,
                    transferAmount: ele.transferAmount,
                    value: ele.value,
                    timeIdle: 0,
                    untilTimestamp: 0,
                    missingAPY: 0,
                    missingTokens: 0
                } as BalanceChanges
            })
        }
        balanceHistory.push(tokenHistory)
    }
    return balanceHistory
}
