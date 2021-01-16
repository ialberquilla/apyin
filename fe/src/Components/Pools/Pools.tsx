import React from 'react'
import Croxx from './assets/croxx.svg'
import './styles.css'
import { Row } from '../Row/Row'

export type PoolsInput = {
  title: string
  active: any
  setActive: any
}

export function Pools({ title, active, setActive}: PoolsInput) {
  return (
    <div className=''>
      <div className='pools__values'>
        <div className='pools__heading'>
          <div className='pools__container'>
            <Row asset={title} percentage={20} usd={2000} />
            <img
              alt='Expand shrink symbol'
              className='pools__croxx'
              onClick={() => setActive(active === title ? 'undefined' : title)}
              src={Croxx}
            />
          </div>
        </div>
        <div className={`${active === title ? 'show' : ''} pools__content`}>
          <div className='pools__container'>
            <p>stuff</p>
          </div>
        </div>
      </div>
    </div>
  )
}
