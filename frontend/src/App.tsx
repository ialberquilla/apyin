import React, { useCallback, useEffect, useState } from 'react'
import { Pools } from './Components/Pools/Pools'
import { Row } from './Components/Row/Row'
import { Loader } from './Components/Loader/Loader'
import './App.css'

export const App = () => {
  const [active, setActive] = useState('')
  const [loader, setLoader] = useState(true)
  const [account, setAccount] = useState()
  window.ethereum.on('accountsChanged', (accounts: any) => {
    accounts.length === 0 && setAccount(undefined)
  })

  useEffect(() => {
    setTimeout(() => {
      setAccount(window.ethereum.selectedAddress)
      setLoader(false)
    }, 1000)
  }, [])

  const ethEnabled = useCallback(async () => {
    if (account) return
    setLoader(true)
    await window.ethereum.send('eth_requestAccounts')
    setTimeout(() => {
      setAccount(window.ethereum.selectedAddress)
      setLoader(false)
    }, 1000)
  }, [account])

  return (
    <div className='App' style={{opacity: loader ? .3 : 1, transition: 'opacity 100ms ease-in-out'}}>
      {loader && <Loader/>}
      <div className='App__top'>
        <span>APYin</span>
        <div
          onClick={() => ethEnabled()}
          className='App__connect-wallet'
        >
          {account || 'Connect Wallet'}
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
