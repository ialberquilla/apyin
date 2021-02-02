import mongoose from 'mongoose'
import { EthPrice } from '../schemata/ethPrice'
import { getHistoricalAltPrice } from '../graphql/queryMethods'
import { AaveReserve } from '../schemata/aaveReserve'
import { AltPrice } from '../schemata/altPrice'
import config from "../config";

mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false);


async function getClosestEthPrice(ofTimestamp: number) {
  const laterTimestamp = await EthPrice.find({ timestamp: { $gte: ofTimestamp } }).limit(1)
  const earlierTimestamp = await EthPrice.find({ timestamp: { $lte: ofTimestamp } }).sort({ timestamp: -1 }).limit(1)
  return [earlierTimestamp[0], laterTimestamp[0]].sort((a, b) => a.timestamp > b.timestamp ? 1 : -1)[0].usdPrice
}

(async () => {
  await mongoose.connect(`mongodb://${config.dbHost}:27018/apyin`, { useNewUrlParser: true, useUnifiedTopology: true })
  console.log('fetching reserves')
  const reserves = await AaveReserve.find()
  console.log(`starting process for ${reserves.length} reserves`)
  for (const reserve of reserves) {
    try {
      console.log(`getting historical data for ${reserve.symbol}`)
      const prices = await getHistoricalAltPrice(reserve.underlyingAsset)
      console.log(`processing data for ${reserve.symbol}`)
      const altPrices = await Promise.all(prices.map(async price => {
        const closestEthPrice = await getClosestEthPrice(price.timestamp)
        return {
          timestamp: price.timestamp,
          symbol: reserve.symbol,
          decimals: reserve.decimals,
          ethPrice: price.price,
          usdPrice: closestEthPrice * price.price * Math.pow(10, -reserve.decimals)
        }
      }))
      console.log(`saving data for ${altPrices.length} points for ${reserve.symbol}`)
      await AltPrice.insertMany(altPrices)
      console.log('saved')
    } catch (e) {
      console.log(e)
    }
  }
  console.log('mission accomplished!')
})()
