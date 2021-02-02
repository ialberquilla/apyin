import mongoose from 'mongoose'
import { getHistoricalRate } from '../graphql/queryMethods'
import { AaveReserve } from '../schemata/aaveReserve'
import { HistoricalLiquidityRate } from '../schemata/reserveHistory'
import config from "../config";

mongoose.set('useCreateIndex', true);

(async () => {
  await mongoose.connect(`mongodb://${config.dbHost}:27018/apyin`, { useNewUrlParser: true, useUnifiedTopology: true })
  console.log('fetching reserves')
  const reserves = await AaveReserve.find()
  console.log(`starting process for ${reserves.length} reserves`)
  for (const reserve of reserves) {
    console.log(`Getting historic data for reserve ${reserve.symbol}`)
    const reserveHistory = await getHistoricalRate(reserve.id)
    console.log(reserve.id)
    const aaveHistory = reserveHistory.map(point => ({
      liquidityRate: point.liquidityRate,
      reserveId: point.reserve.id,
      symbol: point.reserve.symbol,
      timestamp: point.timestamp
    }))
    await HistoricalLiquidityRate.insertMany(aaveHistory)
  }
  console.log('mission accomplished!')
}
)()
