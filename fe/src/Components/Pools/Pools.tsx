import React from 'react'
import './styles.css'

export type PoolsInput = {
  title: string
  active: any
  setActive: any
}

export function Pools({ title, active, setActive}: PoolsInput) {
  return (
    <div className='pools'>
      <div className='pools__labels'>
        <div className='pools__assets'>
          assets
        </div>
        <div className='pools__percentage'>
          %
        </div>
        <div className='pools__usd'>
          $
        </div>
      </div>

      <div className='pools__values'>
        <div className='pools__heading'>
          <div className='pools__container'>
            <p>{title}</p>
            <span onClick={() => setActive(active === title ? 'undefined' : title)}>{active === title ? 'X' : '|||'}</span>
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
