import { getReserves, getHistoricalRate } from './graphql/queryMethods'
import { saveCacheReserves, saveReserveHistory } from './cache/reserve'
import { calculateRates } from './calculations/wallet';
require('dotenv').config()

async function main() {
    const { reserves } = await getReserves()
    await saveCacheReserves(reserves);

    for (const reserve of reserves) {
        console.log(`Getting historic data for reserve ${reserve.symbol}`)
        const reserveHistoy = await getHistoricalRate(reserve.id);
        await saveReserveHistory(reserve.symbol, reserveHistoy)
    }

    console.log("starting calcs")

    await calculateRates(process.env.ACCOUNT)


}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });