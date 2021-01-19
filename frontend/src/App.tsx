import React, { useState } from 'react'
import { Pools } from './Components/Pools/Pools'
import { Row } from './Components/Row/Row'
import './App.css'
import { useWeb3Context } from 'web3-react'

export const App = () => {
  const context = useWeb3Context()
  const [active, setActive] = useState('')
  console.log(context.account)

  return (
    <div className='App'>
      <div className='App__top'>
        <span>APYin</span>
        <div
          onClick={() => context.setFirstValidConnector(['MetaMask'])}
          className='App__connect-wallet'
        >
          Connect Wallet
        </div>
      </div>
      <hr/>
      <br/>
      <Row asset='asset' percentage='%' usd='$' link='ape'/>
      <hr/>
      <div className='pools__wrapper'>
        <Pools title='Ether' active={active} setActive={setActive}/>
        <hr/>
        <Pools title='Dai' active={active} setActive={setActive}/>
      </div>
    </div>
  )
}
