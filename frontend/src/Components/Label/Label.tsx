import React from 'react'
import './styles.css'

export type RowInput = {
  asset: any
  link: any
  percentage: any
  usd: any
  expandShrink?: any
}

export function Label ({ asset, link, percentage, usd, expandShrink }: RowInput) {
  return (
    <div className='label__wrapper'>
      <div className='label__grid'>
        <div className='label__content'>
          {asset}
        </div>
        <div className='label__content'>
          {percentage}
        </div>
        <div className='label__content'>
          {usd}
        </div>
        <div className='label__content'>
          {expandShrink}
        </div>
        <div className='label__content'>
          {link}
        </div>
      </div>
    </div>
  )
}
