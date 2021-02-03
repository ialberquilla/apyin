import { calculateIdleTime } from './time'
import { getRatesForTimeFrame, setTimeInRate, calculateTotalRate } from './apy'
import { getAccountHistory, getReserves } from '../graphql/queryMethods'

export const calculateRates = async (wallet: string) => {
    const history = await getAccountHistory(wallet)
    const reserves = (await getReserves()).reserves
    const reserveSymbols = reserves.map(reserve => reserve.symbol)
    const filterHistory = history.filter(token => reserveSymbols.includes(token.symbol))
    const withIdle = calculateIdleTime(filterHistory)

    const tokensMissingData = await Promise.all(withIdle.map(async (token: any) => {
        const { balancesChangesRates, totalRate } = await getRatesForTimeFrame(token.symbol, token.balanceChanges)

        const rates = await Promise.all(balancesChangesRates.map(async (balanceChange) => {
            const balancesChangesRatesAndTime = await setTimeInRate(balanceChange)
            const totalRate = await calculateTotalRate(balancesChangesRatesAndTime, balanceChange.value, token.symbol)
            return totalRate
        }))

        const ratesOfBalances = rates.filter(ele => ele.missingRate > 0)

        const tokenMissingData = {
            token: token.symbol,
            totalRate,
            ratesOfBalances
        }
        return tokenMissingData
    }))

    return tokensMissingData
}
