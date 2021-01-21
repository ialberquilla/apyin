import { getReserves, getHistoricalRate } from '../graphql/queryMethods'
import { saveCacheReserves, saveReserveHistory } from '../cache/reserve'

export const initialLoad = async() => {
    const { reserves } = await getReserves()
    await saveCacheReserves(reserves);

    for (const reserve of reserves) {
        console.log(`Getting historic data for reserve ${reserve.symbol}`)
        const reserveHistoy = await getHistoricalRate(reserve.id);
        await saveReserveHistory(reserve.symbol, reserveHistoy)
    }
}