import React from 'react'
import './styles.css'
import Croxx from '../../assets/croxx.svg'

export type RowInput = {
  asset: any
  link: any
  percentage: any
  usd: any
  balance?: any
  active?: any
  setActive?: any
  setPeriodActive: any
}

export function Row({ asset, link, percentage, usd, balance, active, setActive, setPeriodActive }: RowInput) {
  return (
    <div className='row__outer-grid'>
      <div className={`row__internal ${active === balance.asset ? 'active' : ''}`}>
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
            <div
              className={`${active === balance.asset ? 'X' : ''} row__croxx`}
            >
              <img
                alt='Expand shrink symbol'
                height='30px'
                onClick={() => {
                  setActive(active === balance.asset ? '' : balance.asset)
                  setPeriodActive('')
                }}
                src={Croxx}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='row__link-wrapper'>
        <a
          className='row__link'
          href={link}
          target='_blank'
          rel="noreferrer noopener"
        >
          APE IN
        </a>
      </div>
    </div>
  )
}
