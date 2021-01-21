import React from 'react'
import Croxx from './assets/croxx.svg'
import './styles.css'
import { Row } from '../Row/Row'
import { TimeChart } from '../TimeChart'

export type PoolsInput = {
  balance: any
  active: any
  setActive: any
}

export function Pools({ balance, active, setActive }: PoolsInput) {
  return (
    <>
      <div className='pools__heading'>
        <div className='pools__container'>
          <Row asset={balance.asset} percentage={balance.percentage.toPrecision(5)} usd={balance.usd.toPrecision(5)} link='🔗'/>
          <div
            className={`${active === balance.asset ? 'X' : ''} pools__croxx`}
          >
            <img
              alt='Expand shrink symbol'
              onClick={() => setActive(active === balance.asset ? '' : balance.asset)}
              src={Croxx}
            />
          </div>
        </div>
      </div>
      <hr/>
      <div className={`${active === balance.asset ? 'show' : ''} pools__content-wrapper`}>
        <div className='pools__content'>
          <div className='pools__container'>
            <span>天<br/>空</span>
            <TimeChart/>
            <span>天<br/>空</span>
          </div>
        </div>
      </div>
    </>
  )
}
