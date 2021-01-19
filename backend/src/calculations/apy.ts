import { getReserveHistory } from "../cache/reserve";
import { BalanceChanges } from "../interfaces/models";
import config from '../config'

export const getRatesForTimeFrame = async (symbol: string, balanceChanges: BalanceChanges) => {
    const rateshistory = await getReserveHistory(symbol)
    let appliedRates = []

    const initialTimestamp = balanceChanges.timestamp
    const finalTimestamp = balanceChanges.untilTimestamp

    rateshistory.forEach(rateChange => {
        if (rateChange.timestamp >= initialTimestamp && rateChange.timestamp <= finalTimestamp) {
            appliedRates.push(rateChange)
        }
    });

    if (appliedRates.length > 0) {
        appliedRates[0].timestamp = initialTimestamp
        appliedRates[appliedRates.length - 1].untilTimestamp = finalTimestamp
    }


    return appliedRates

}


export const setTimeInRate = (ratesArray) => {

    const lastIndex = ratesArray.length - 1

    const ratesWithtime = ratesArray.map((element, index) => {
        let timeInRate
        if (index < lastIndex) {
            timeInRate = Number(ratesArray[index + 1].timestamp) - Number(element.timestamp)
        } else {
            timeInRate = Number(ratesArray[lastIndex].untilTimestamp) - ratesArray[lastIndex].timestamp
        }

        return {
            id: element.id,
            liquidityRate: element.liquidityRate,
            reserve: element.reserve.symbol,
            timestamp: element.timestamp,
            liquidityRateDec: Number(element.liquidityRate) / config.DECIMALS,
            timeInRate: timeInRate
        }
    })

    return ratesWithtime
}



export const calculateTotalRate = (arrayRates, amount) => {
    let totalRate = 0
    let increment
    let lastIncrement = amount

    for (var i = 0; i < arrayRates.length; i++) {
        const ele = arrayRates[i]
        let elementRate = Number(ele.timeInRate) * (Number(ele.liquidityRateDec) / config.SECONDS_YEAR)
        totalRate += elementRate
        increment = Number(lastIncrement) + (Number(lastIncrement) * Number(elementRate))
        lastIncrement = increment

    }

    return { missingRate: totalRate, tokensMissing: increment - amount }
}