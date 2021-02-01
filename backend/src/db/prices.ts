import { AltPrice } from '../schemata/altPrice'

export const getAltPrice = async (symbol: string, timestamp: string) => {
    const laterTimestamp = await AltPrice.find({
        $and: [
            { symbol },
            { timestamp: { $lte: timestamp } }
        ]
    })
        .sort({ timestamp: -1 })
        .limit(1)
} 