import mongoose from 'mongoose'

const historicalLiquidityRateSchema = new mongoose.Schema(
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

historicalLiquidityRateSchema.index({ timestamp: 1, symbol: 1 })

export const HistoricalLiquidityRate = mongoose.model<any>('AaveHistory', historicalLiquidityRateSchema)
