import React from 'react'
import { Row } from '../Row/Row'
import { PoolsWithTabsAndText } from '../Pools/PoolsWithTabsAndText'
import './styles.css'

type TableProps = {
  balances: any
  active: any
  setActive: any
}

export function Table({ balances, active, setActive }: TableProps) {
  return <div className='table__wrapper'>
    <div className='table__content'>
      <Row asset='Asset' percentage='Return on holdings (%)' usd='Return on holdings ($)' expandShrink='View More/Less' link='Action'/>
      <div className='pools__wrapper'>
        {balances?.map((balance: any) => <div key={balance.asset}><PoolsWithTabsAndText balance={balance}
                                                                                        active={active}
                                                                                        setActive={setActive}/>
          <hr/>
        </div>)}
      </div>
    </div>
  </div>
}
