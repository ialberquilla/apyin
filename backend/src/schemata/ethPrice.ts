import mongoose from 'mongoose'

const ethPriceSchema = new mongoose.Schema(
  {
    timestamp: {
      type: Number,
      required: true,
      unique: true
    },
    usdPrice: {
      type: Number,
      required: true
    }
  }
);

ethPriceSchema.index({ timestamp: 1 })

export const EthPrice = mongoose.model<any>('EthPrice', ethPriceSchema)
