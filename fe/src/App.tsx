import React, { useState } from 'react'
import './App.css'
import { Pools } from './Components/Pools/Pools'
import { Row } from './Components/Row/Row'

export const App = () => {
  const [active, setActive] = useState('')
  return (
    <div className='App'>
      <div className='__top'>
        <span>APYin</span>
        <div className='__connect-wallet'>
          Connect Wallet
        </div>
      </div>
      <hr/>
      <br/>
      <Row asset='asset' percentage='%' usd='$' />
      <Pools title='Ether' active={active} setActive={setActive}/>
      <hr/>
      <Pools title='Dai' active={active} setActive={setActive}/>
    </div>
  )
}
