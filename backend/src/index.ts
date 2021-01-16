import { getReserves, getHistoricalRate } from './graphql/queryMethods'

async function main() {

    const { reserves } = await getReserves()

    for (const reserve of reserves) {
        const reserveHistoy = await getHistoricalRate(reserve.id);
        console.log(reserveHistoy)
    }
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });