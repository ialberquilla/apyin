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
        for (const balanceChange of token.balanceChanges) {
            const timeFramesRate = await getRatesForTimeFrame(token.symbol, balanceChange)
            console.log(timeFramesRate)
            if(timeFramesRate.length > 0){
                const timeFramesRateAndTime = await setTimeInRate(timeFramesRate)
                const totalRate = calculateTotalRate(timeFramesRateAndTime, balanceChange.value)
                ratesOfBalances.push(totalRate)
            }
        }
        const tokenMissingData = {
            token: token.symbol,
            ratesOfBalances
        }
        tokensMissingData.push(tokenMissingData)
    }

    tokensMissingData.forEach(ele => {
        console.log(ele.token)
        console.log(ele.ratesOfBalances)
    })
}