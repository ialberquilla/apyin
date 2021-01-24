export type Assets = {
  asset: string
  percentage: number
  usd: number
  link: string
  apy: Apy[]
}

export type Apy = {
  date: string
  hodlYield: number
  compoundYield: number
}

export type Transfers = {
  txid: string
  symbol: string
  blocktime: number
  amount: string
  from: string
  to: string
}

export type BalanceHistory = {
  actualValue: number
  symbol: string
  address: string
  missingAPY: number,
  missingTokens: number,
  balanceChanges: BalanceChanges[]
}

export type BalanceChanges = {
  block: number
  timestamp: number
  untilTimestamp: number
  transferAmount: number
  value: number
  timeIdle: number
  missingAPY: number
  missingTokens: number
  rateChanges: RateChanges[]
}

export type RateChanges = {
  liquidityRate: number,
  timestamp: number
  untilTimestamp?: number
}