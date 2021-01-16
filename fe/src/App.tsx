import React, { useState } from 'react'
import './App.css'
import { Pools } from './Components/Pools/Pools'

export const App = () => {
  const [active, setActive] = useState('Ether')
  return (
    <div className='App'>
      <div className='__top'>
        <span>APYin</span>
        <div className='__connect-wallet'>
          Connect Wallet
        </div>
      </div>
      <span>Aave Historical Returns on Holdings Calculator</span>
      <Pools title='Ether' active={active} setActive={setActive}/>
      <Pools title='Dai' active={active} setActive={setActive}/>
    </div>
  )
}
