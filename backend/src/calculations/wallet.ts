import { calculateIdleTime } from './time'
import { getRatesForTimeFrame, setTimeInRate, calculateTotalRate } from './apy'
import { getAccountHistory, getReserves } from '../graphql/queryMethods'

export const calculateRates = async (wallet: string) => {
    const history = await getAccountHistory(wallet)
    const reserves = (await getReserves()).reserves
    const reserveSymbols = reserves.map(reserve => reserve.symbol)
    const filterHistory = history.filter(token => reserveSymbols.includes(token.symbol))
    const withIdle = calculateIdleTime(filterHistory)

    let tokensMissingData = []

    for (const token of withIdle) {
        let ratesOfBalances = []
        const { balancesChangesRates, totalRate } = await getRatesForTimeFrame(token.symbol, token.balanceChanges)

        for (const balanceChange of balancesChangesRates) {

            if (balancesChangesRates.length > 0) {
                const balancesChangesRatesAndTime = await setTimeInRate(balanceChange)
                const totalRate = await calculateTotalRate(balancesChangesRatesAndTime, balanceChange.value, token.symbol)
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
