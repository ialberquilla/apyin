import { BalanceChanges, RateChanges } from "../interfaces/models";
import config from '../config'
import { HistoricalLiquidityRate } from '../schemata/reserveHistory'

type BucketChangesRate = {
    apyBucket: number,
    startDate: number,
    endDate?: number
}

export const getRatesForTimeFrame = async (symbol: string, balanceChanges: BalanceChanges[]) => {
    const rateshistory = await HistoricalLiquidityRate.find({ symbol }).sort({ timestamp: 1 })
    let balancesChangesRates = [...balanceChanges];
    let bucketChangesRates: BucketChangesRate[] = [{
        startDate: rateshistory[0].timestamp,
        apyBucket: getApyBucket(rateshistory[0].liquidityRate)
    }]

    const ratesLength = rateshistory.length

    for (let index = 0; index < ratesLength; index++) {
        const timeFrameLength = balanceChanges.length

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
        let lastBucketChangesRate = bucketChangesRates[bucketChangesRates.length - 1]
        if (getApyBucket(rateshistory[index].liquidityRate) !== lastBucketChangesRate.apyBucket && index !== 0) {
            bucketChangesRates[bucketChangesRates.length - 1] = { ...lastBucketChangesRate, endDate: rateshistory[index - 1].timestamp }
            bucketChangesRates.push({ apyBucket: getApyBucket(rateshistory[index].liquidityRate), startDate: rateshistory[index].timestamp })
        }
    }
    bucketChangesRates[bucketChangesRates.length - 1] = { ...bucketChangesRates[bucketChangesRates.length - 1], endDate: rateshistory[rateshistory.length - 1].timestamp }

    return { balancesChangesRates, bucketChangesRates }
}


export const setTimeInRate = (balanceChange: BalanceChanges) => {

    const lastIndex = balanceChange.rateChanges.length - 1

    console.log(balanceChange.rateChanges)

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
