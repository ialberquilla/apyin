import React from 'react'
import './styles.css'

export type RowInput = {
  asset: any
  percentage: any
  usd: any
}

export function Row ({ asset, percentage, usd }: RowInput) {
  return (
    <div className='row__wrapper'>
      <div className='row__grid'>
        <div className='row__assets'>
          {asset}
        </div>
        <div className='row__percentage'>
          {percentage}
        </div>
        <div className='row__usd'>
          {usd}
        </div>
      </div>
    </div>
  )
}
