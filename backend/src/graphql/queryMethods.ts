import {
    GET_RESERVES,
    GET_HISTORICAL_RATE,
    GET_GAS_PRICE,
    GET_HISTORICAL_BALANCES, GET_HISTORICAL_ETH_PRICE, GET_HISTORICAL_ALT_PRICE
} from './querys'
import { request } from 'graphql-request'
import config from '../config'
import { BalanceHistory, BalanceChanges, AaveReserves, PriceHistoryItem } from '../interfaces/models'


export const getReserves = async (): Promise<AaveReserves> => {
    return request(config.GRAPH_API_URL, GET_RESERVES)
}

export const getGasPrice = async () => {
    return request(config.GRAPH_API_URL, GET_GAS_PRICE)
}

export const getAllAvailableData = async (query: string, queryInput?: object) => {
    let areData = true
    let timestamp = 0
    let total = []

    while (areData) {
        const variables = {
            timestamp,
            ...queryInput
        }

        const result = await request(config.GRAPH_API_URL, query, variables)
        await new Promise(resolve => setTimeout(resolve, 50));

        const reservesCount = result.priceHistoryItems.length
        areData = reservesCount > 0
        if (areData) timestamp = result.priceHistoryItems[reservesCount - 1].timestamp

        total = [...total, ...result.priceHistoryItems]
    }

    return total
}

export const getHistoricalRate = async (reserve) => {
    return await getAllAvailableData(GET_HISTORICAL_RATE, { reserve })
}

export const getHistoricalEthPrice = async () => {
    return await getAllAvailableData(GET_HISTORICAL_ETH_PRICE)
}

export const getHistoricalAltPrice = async (asset): Promise<PriceHistoryItem[]> => {
    return await getAllAvailableData(GET_HISTORICAL_ALT_PRICE, { asset })
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
