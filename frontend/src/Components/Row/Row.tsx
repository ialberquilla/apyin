import React from 'react'
import './styles.css'

export type RowInput = {
  asset: any
  link: any
  percentage: any
  usd: any
  expandShrink?: any
}

export function Row ({ asset, link, percentage, usd, expandShrink }: RowInput) {
  return (
    <div className={`${asset === 'Asset' ? 'row__label-wrapper' : 'row__wrapper'}`}>
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
        <div className='row__expand-shrink'>
          {expandShrink}
        </div>
        <div className={`${asset === 'asset' ? 'row__link label' : 'row__link'}`}>
          {link}
        </div>
      </div>
    </div>
  )
}
