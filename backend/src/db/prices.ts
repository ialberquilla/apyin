import { AltPrice } from '../schemata/altPrice'
import { EthPrice } from '../schemata/ethPrice'


export const getAltPrice = async (symbol: string, timestamp: number): Promise<number> => {
    const price = await AltPrice.find({
        $and: [
            { symbol },
            { timestamp: { $lte: timestamp } }
        ]
    })
        .sort({ timestamp: -1 })
        .limit(1)

    return price[0] ? price[0].usdPrice : 0
}

export const getEthPrice = async (timestamp: string) => {
    const price = await EthPrice.find({ timestamp: { $lte: timestamp } })
        .sort({ timestamp: -1 })
        .limit(1)

    return price[0] ? price[0].usdPrice : 0

}
