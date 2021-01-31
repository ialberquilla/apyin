import mongoose from 'mongoose'

const altPriceSchema = new mongoose.Schema(
  {
    timestamp: {
      type: Number,
      required: true
    },
    ethPrice: {
      type: Number,
      required: true
    },
    usdPrice: {
      type: Number
    },
    symbol: {
      type: String,
      required: true
    },
    decimals: {
      type: Number,
      required: true
    }
  }
)

altPriceSchema.index({ timestamp: 1, symbol: 1 })

export const AltPrice = mongoose.model<any>('AltPrice', altPriceSchema)
