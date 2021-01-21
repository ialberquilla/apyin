import React from 'react'
import Croxx from './assets/croxx.svg'
import './styles.css'
import { Row } from '../Row/Row'
import { TimeChart } from '../TimeChart'

export type PoolsInput = {
  title: string
  active: any
  setActive: any
}

export function Pools({title, active, setActive}: PoolsInput) {
  return (
    <>
      <div className='pools__heading'>
        <div className='pools__container'>
          <Row asset={title} percentage={20} usd={2000} link='🔗'/>
          <div
            className={`${active === title ? 'X' : ''} pools__croxx`}
          >
            <img
            alt='Expand shrink symbol'
            onClick={() => setActive(active === title ? '' : title)}
            src={Croxx}
          />
          </div>
        </div>
      </div>
      <hr/>
      <div className={`${active === title ? 'show' : ''} pools__content-wrapper`}>
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
