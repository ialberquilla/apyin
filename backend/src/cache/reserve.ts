import { AaveHistory } from '../schemata/reserveHistory'
import cache from './instance'
import { getReserves } from '../graphql/queryMethods'

export const saveReserveHistory = (symbol, histoy) => {
    cache.set(symbol, { histoy })
}

export const getReserveHistory = async (symbol) => {
    const data = await AaveHistory.find({ symbol }).sort({ timestamp: 1 })
    return data
}

export const getReserveHistoryTimeFrame = async (from, to, symbol) => {
    const lowerTimestamp = await getReserveHistoryLowerLimit(from, symbol)
    const upperTimestamp = await getReserveHistoryUpperLimit(to, symbol)
    const data = await AaveHistory.find({
        $and: [
            {symbol},
            {"timestamp" : {$gte : lowerTimestamp}},
            {"timestamp" : {$lte : upperTimestamp}}
        ]
    }).sort({ timestamp: 1 })
    return data
}

export const getReserveHistoryLowerLimit = async (lowerTimestamp, symbol) => {
    const data = await AaveHistory.findOne({
        $and: [
            {symbol},
            {"timestamp" : {$lte : lowerTimestamp}}
        ]
    }).sort({ timestamp: -1 })
    return data.timestamp
}

export const getReserveHistoryUpperLimit = async (upperTimestamp, symbol) => {
    const data = await AaveHistory.findOne(
        {
            $and: [
                {symbol},
                {"timestamp" : {$gte : upperTimestamp}}
            ]
        }).sort({ timestamp: 1 })
    return data.timestamp
}

export const getCacheReserves = async () => {
    const data = await getReserves()
    return data.reserves
}


export const saveCacheReserves = (reserves) => {
    cache.set('reserves', { reserves })
}
