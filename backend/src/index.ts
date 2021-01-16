import { getReserves, getHistoricalRate } from './graphql/queryMethods'
import { getReserveHistory, saveReserveHistory } from './cache/reserve'

async function main() {

    const { reserves } = await getReserves()

    for (const reserve of reserves) {
        console.log(`Getting historic data for reserve ${reserve.symbol}`)
        const reserveHistoy = await getHistoricalRate(reserve.id);
        await saveReserveHistory(reserve.symbol, reserveHistoy)
    }

    const getFromCache = await getReserveHistory('TUSD')

    console.log(getFromCache)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });