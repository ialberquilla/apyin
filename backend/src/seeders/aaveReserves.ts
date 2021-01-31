import mongoose from 'mongoose'
import { getReserves } from '../graphql/queryMethods'
import { AaveReserve } from '../schemata/aaveReserve'

mongoose.set('useCreateIndex', true);

(async () => {
  await mongoose.connect('mongodb://localhost:27018/apyin', { useNewUrlParser: true, useUnifiedTopology: true })
  const reserves = await getReserves()
  console.log(reserves)
  await AaveReserve.insertMany(reserves.reserves)
})()
