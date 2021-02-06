import React from 'react'
import './styles.css'
import { Row } from '../Row/Row'
import { TimeChart } from '../TimeChart'
import { aaveLinkDictionary } from '../../assets/aaveLinkDictionary'

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
          <Row
            asset={balance.asset}
            assetLogo={balance.logo}
            percentage={balance.percentage.toPrecision(5)}
            usd={balance.usd.toPrecision(5)}
            link={aaveLinkDictionary[balance.asset as keyof typeof aaveLinkDictionary]}
            balance={balance}
            active={active}
            setActive={setActive}
          />
        </div>
      </div>
      <div className={`${active === balance.asset ? 'show' : ''} pools__content-wrapper`}>
        <div className='pools__content'>
          <div className='pools__container'>
            <div className='fomo-space'>
              <div className='fomo-space-content'>
                Look at all that sweet USD you could have earned by lending your {balance.asset} on Aave. I mean, come on!
              </div>
            </div>
            <div className='pool__chart'>
              <TimeChart balance={balance}/>
            </div>
            <div className='info-space'>
              {`Your ${balance.asset} has been idle for ${Math.floor(balance.totalIdleTime / 3600)} hours and ${Math.floor((balance.totalIdleTime % 3600) / 60)} minutes. Lending would have increased it by ${balance.percentage.toPrecision(2)}%`}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
