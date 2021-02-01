import { getReserveHistory } from "../cache/reserve";
import { BalanceChanges, RateChanges } from "../interfaces/models";
import config from '../config'


export const getRatesForTimeFrame = async (symbol: string, balanceChanges: BalanceChanges[]) => {
    const rateshistory = await getReserveHistory(symbol)
    let balancesChangesRates = [...balanceChanges];

    const ratesLength = rateshistory.length
    const now = Math.floor(Date.now() / 1000)
    let totalRate = 0

    for (let index = 0; index < ratesLength; index++) {
        const timeFrameLength = balanceChanges.length
        
        let timeInRate
        if (index < ratesLength -1) {
            timeInRate = Number(rateshistory[index + 1].timestamp) - Number(rateshistory[index].timestamp)
        } else {
            timeInRate = Number(now) - rateshistory[ratesLength - 1].timestamp
        }

        let elementRate = timeInRate * ((Number(rateshistory[ratesLength-1].liquidityRate) / config.DECIMALS) /config.SECONDS_YEAR)

        totalRate += elementRate

        for (let frameindex = 0; frameindex < timeFrameLength; frameindex++) {
            const initialTimestamp = balanceChanges[frameindex].timestamp
            const finalTimestamp = balanceChanges[frameindex].untilTimestamp

            if (rateshistory[index].timestamp >= initialTimestamp && rateshistory[index].timestamp <= finalTimestamp) {
                const rateApplied: RateChanges = {
                    liquidityRate: rateshistory[index].liquidityRate,
                    timestamp: rateshistory[index].timestamp,
                }
                balancesChangesRates[frameindex].rateChanges.push(rateApplied)
            }
        }

    }

    return { balancesChangesRates, totalRate }
}


export const setTimeInRate = (balanceChange: BalanceChanges) => {

    const lastIndex = balanceChange.rateChanges.length - 1

    const ratesWithtime = balanceChange.rateChanges.map((element, index) => {
        let timeInRate

        if (index === 0) {
            if (index === lastIndex) {
                timeInRate = Number(balanceChange.untilTimestamp) - Number(balanceChange.timestamp)
            } else {
                timeInRate = Number(balanceChange.rateChanges[index + 1].timestamp) - Number(balanceChange.timestamp)
            }
        } else if (index < lastIndex) {
            timeInRate = Number(balanceChange.rateChanges[index + 1].timestamp) - Number(element.timestamp)
        } else {
            timeInRate = Number(balanceChange.untilTimestamp) - balanceChange.rateChanges[lastIndex].timestamp
        }

        return {
            liquidityRate: element.liquidityRate,
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
    let timeIdle = 0

    for (var i = 0; i < arrayRates.length; i++) {
        const ele = arrayRates[i]
        let elementRate = Number(ele.timeInRate) * (Number(ele.liquidityRateDec) / config.SECONDS_YEAR)
        totalRate += elementRate
        increment = Number(lastIncrement) + (Number(lastIncrement) * Number(elementRate))
        lastIncrement = increment
        timeIdle += ele.timeInRate

    }

    return { missingRate: totalRate, tokensMissing: increment - amount, timeIdle }
}


function getApyPercentage (liquidityRate) {
    return Number(liquidityRate) / config.DECIMALS * 100
}

function getApyBucket (liquidityRate) {
    return Math.round(getApyPercentage(liquidityRate) / 20) * 20
}
