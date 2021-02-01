import mongoose from 'mongoose'

const aaveReserveSchema = new mongoose.Schema(
  {
    decimals: {
      type: Number,
      required: true,
    },
    symbol: {
      type: String,
      required: true
    },
    underlyingAsset: {
      type: String,
      required: true
    }
  }
);

export const AaveReserve = mongoose.model<any>('AaveReserve', aaveReserveSchema)
