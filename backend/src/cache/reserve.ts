import cache from './instance'

export const saveReserveHistory = (symbol, histoy) => {
    cache.set(symbol, { histoy })
}

export const getReserveHistory = (symbol) => {
    const data = cache.get(symbol)
    return data.histoy
}

export const getCacheReserves = () => {
    const data = cache.get('reserves')
    return data.reserves
}


export const saveCacheReserves = (reserves) => {
    cache.set('reserves', { reserves })
}
