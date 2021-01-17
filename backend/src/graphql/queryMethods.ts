import { GET_RESERVES, GET_HISTORICAL_RATE } from './querys'
import { request } from 'graphql-request'
import config from '../config'


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
        await new Promise(resolve => setTimeout(resolve, 1000));

        const reservesCount = result.reserveParamsHistoryItems.length
        areData = reservesCount > 0
        if (areData) timestamp = result.reserveParamsHistoryItems[reservesCount - 1].timestamp

        total = [...total, ...result.reserveParamsHistoryItems]
    }

    return total
}