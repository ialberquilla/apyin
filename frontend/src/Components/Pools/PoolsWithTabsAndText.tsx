import React, { useState } from 'react'
import './styles.css'
import { Row } from '../Row/Row'
import { TimeChart } from '../TimeChart'
import { aaveLinkDictionary } from '../../assets/aaveLinkDictionary'
import { tabs, Tabs } from '../Tabs/Tabs'

export type PoolsInput = {
  balance: any
  active: any
  setActive: any
}

export function PoolsWithTabsAndText({ balance, active, setActive }: PoolsInput) {
  const [activeTab, setActiveTab] = useState(tabs[0])
  return (
    <>
      <div className='pools__heading'>
        <div className='pools__container'>
          <Row
            asset={balance.asset}
            percentage={balance.percentage.toPrecision(5)}
            usd={balance.usd.toPrecision(5)}
            // @ts-ignore
            link={aaveLinkDictionary[balance.asset]}
            balance={balance}
            active={active}
            setActive={setActive}
          />
        </div>
      </div>
      <div className={`${active === balance.asset ? 'show' : ''} pools__content-wrapper`}>
        <div className='pools__content'>
          <div className='pools__container'>
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>
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
