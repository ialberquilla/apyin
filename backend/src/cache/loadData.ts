import { getReserves, getHistoricalRate, getHistoricalEthPrice } from '../graphql/queryMethods'
import { AaveHistory } from '../schemata/reserveHistory'
import { EthPrice } from '../schemata/ethPrice'

export const initialLoad = async () => {
    const { reserves } = await getReserves()

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
    }
}

export const initialEthPriceLoad = async () => {
    console.log(`Getting historic data for Eth price`)
    const ethPriceHistoryData = await getHistoricalEthPrice();
    const ethPriceHistory = ethPriceHistoryData.map(point => ({
        timestamp: point.timestamp,
        usdPrice: point.price
    }))
    await Promise.all(ethPriceHistory.map(point => EthPrice.findOneAndUpdate({timestamp: point.timestamp}, point, {upsert: true})))
}
