import { calculateIdleTime } from '../calculations/time'
import { getRatesForTimeFrame, setTimeInRate, calculateTotalRate } from '../calculations/apy'
import { getAccountHistory } from '../graphql/queryMethods'
import { getCacheReserves } from '../cache/reserve'


export const calculateRates = async (wallet: string) => {
    const history = await getAccountHistory(wallet)
    const reserves = await getCacheReserves()
    const reserveSymbols = reserves.map(reserve => reserve.symbol)
    const filterHistory = history.filter(token => reserveSymbols.includes(token.symbol))
    const withIdle = await calculateIdleTime(filterHistory)

    let tokensMissingData = []

    for (const token of withIdle) {
        let ratesOfBalances = []
        const { balancesChangesRates, totalRate } = await getRatesForTimeFrame(token.symbol, token.balanceChanges)

        for (const balanceChange of balancesChangesRates) {

                if (balancesChangesRates.length > 0) {
                    const balancesChangesRatesAndTime = await setTimeInRate(balanceChange)
                    const totalRate = calculateTotalRate(balancesChangesRatesAndTime, balanceChange.value)
                    ratesOfBalances.push(totalRate)
                }
        }

        const tokenMissingData = {
            token: token.symbol,
            totalRate,
            ratesOfBalances
        }
        tokensMissingData.push(tokenMissingData)
    }

    return tokensMissingData
}
