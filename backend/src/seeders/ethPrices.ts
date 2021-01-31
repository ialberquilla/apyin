import mongoose from 'mongoose'
import { getHistoricalEthPrice } from '../graphql/queryMethods'
import { EthPrice } from '../schemata/ethPrice'

const theDayEtherChanged = 1584517857

mongoose.set('useCreateIndex', true);

(async () => {
  await mongoose.connect('mongodb://localhost:27018/apyin', { useNewUrlParser: true, useUnifiedTopology: true })
  console.log('getting eth prices')
  const ethPriceHistoryData = await getHistoricalEthPrice();
  console.log('got them')
  const ethPriceHistory = ethPriceHistoryData.map(point => ({
    timestamp: point.timestamp,
    usdPrice: point.timestamp <= theDayEtherChanged ? point.price * Math.pow(10, -8) : 1 / point.price * Math.pow(10, 18)
  }))
  console.log(`processed ${ethPriceHistory.length} prices`)
  await Promise.all(ethPriceHistory.map(point => EthPrice.findOneAndUpdate({ timestamp: point.timestamp }, point, {upsert: true})))
  console.log('finished')
})()
