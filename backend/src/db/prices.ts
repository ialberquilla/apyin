import { AltPrice } from '../schemata/altPrice'
import { EthPrice } from '../schemata/ethPrice'


export const getAltPrice = async (symbol: string, timestamp: number) => {
    console.log(timestamp)
    console.log(typeof (timestamp))
    return AltPrice.find({
        $and: [
            { symbol },
            { timestamp: { $lte: timestamp } }
        ]
    })
        .sort({ timestamp: -1 })
        .limit(1)
}

export const getEthPrice = async (timestamp: string) => {
    return EthPrice.find({ timestamp: { $lte: timestamp } })
        .sort({ timestamp: -1 })
        .limit(1)
} 