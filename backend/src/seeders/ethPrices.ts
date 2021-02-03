import mongoose from 'mongoose'
import { getHistoricalEthPrice } from '../graphql/queryMethods'
import { EthPrice } from '../schemata/ethPrice'
import config from "../config";

const theDayEtherChanged = 1584517857

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

(async () => {
  await mongoose.connect(`mongodb://${config.dbHost}:27018/apyin`, { useNewUrlParser: true, useUnifiedTopology: true })
  console.log('getting eth prices')
  const ethPriceHistoryData = await getHistoricalEthPrice();
  console.log('got them')
  const ethPriceHistory = ethPriceHistoryData.map(point => ({
    timestamp: point.timestamp,
    usdPrice: point.timestamp <= theDayEtherChanged ? point.price / 1e8 : 1 / (point.price / 1e18)
  }))
  console.log(`processed ${ethPriceHistory.length} prices`)
  await Promise.all(ethPriceHistory.map(point => EthPrice.findOneAndUpdate({ timestamp: point.timestamp }, point, { upsert: true })))
  console.log('finished')
})()
