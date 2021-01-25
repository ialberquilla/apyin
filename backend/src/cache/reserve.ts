import { AaveHistory } from '../schemata/reserveHistory'
import cache from './instance'
import { getReserves } from '../graphql/queryMethods'

export const saveReserveHistory = (symbol, histoy) => {
    cache.set(symbol, { histoy })
}

export const getReserveHistory = async (symbol) => {
    const data = await AaveHistory.find({ symbol }).sort({ timestamp: 1 })
    console.log(data)
    return data
}

export const getCacheReserves = async () => {
    const data = await getReserves()
    return data.reserves
}


export const saveCacheReserves = (reserves) => {
    cache.set('reserves', { reserves })
}
