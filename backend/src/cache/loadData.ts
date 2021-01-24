import { getReserves, getHistoricalRate } from '../graphql/queryMethods'
import { saveCacheReserves, saveReserveHistory } from '../cache/reserve'
import { AaveHistory } from '../schemata/reserveHistory'

export const initialLoad = async () => {
    const { reserves } = await getReserves()
    await saveCacheReserves(reserves);

    for (const reserve of reserves) {
        console.log(`Getting historic data for reserve ${reserve.symbol}`)
        const reserveHistory = await getHistoricalRate(reserve.id);
        const aaveHistory = reserveHistory.map(point => ({
            liquidityRate: point.liquidityRate,
            reserveId: point.reserve.id,
            symbol: point.reserve.symbol,
            timestamp: point.timestamp
        }))
        await AaveHistory.insertMany(aaveHistory)
        await saveReserveHistory(reserve.symbol, reserveHistory)
    }
}
