import React from 'react'
import { PoolsWithTabsAndText } from '../Pools/PoolsWithTabsAndText'
import './styles.css'
import { Label } from '../Label/Label'

type TableProps = {
  balances: any
  active: any
  setActive: any
}

export function Table({ balances, active, setActive }: TableProps) {
  return <div className='table__wrapper'>
    <div className='table__content'>
      <Label
        asset='Asset'
        percentage='Return on holdings (%)'
        usd='Return on holdings ($)'
        expandShrink='View More/Less'
        link='Action'
      />
        {balances?.map((balance: any) => <div key={balance.asset}><PoolsWithTabsAndText balance={balance}
                                                                                        active={active}
                                                                                        setActive={setActive}/>
        </div>)}
    </div>
  </div>
}
