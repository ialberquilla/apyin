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
  compoundYield:  number
}
