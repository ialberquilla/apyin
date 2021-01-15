import React from 'react'
import './App.css'
import { Pools } from './Components/Pools/Pools'

export const App = () => {
  return (
    <div className='App'>
      <div className='__top'>
        <span>APYin</span>
        <div className='__connect-wallet'>
          Connect Wallet
        </div>
      </div>
      <span>Aave Historical Returns on Holdings Calculator</span>
      <div className='__wallet-info'>
        <div className='__box'>
          Wallet
        </div>
        <div className='__box'>
          0x4D119445eC81bff24234395cdA1E04113333E389
        </div>
      </div>
      <div className='__pools'>
        <Pools />
      </div>
    </div>
  )
}
