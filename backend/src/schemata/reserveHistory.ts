import mongoose from 'mongoose'

const aaveHistorySchema = new mongoose.Schema(
  {
    reserveId: {
      type: String,
      required: true
    },
    symbol: {
      type: String,
      required: true
    },
    timestamp: {
      type: Number,
      required: true
    },
    liquidityRate: {
      type: Number,
      required: true
    }
  }
);

aaveHistorySchema.index({ timestamp: 1, symbol: 1 })

export const AaveHistory = mongoose.model('AaveHistory', aaveHistorySchema)
