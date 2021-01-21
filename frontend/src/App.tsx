import React, { useCallback, useEffect, useState } from 'react'
import { Pools } from './Components/Pools/Pools'
import { Row } from './Components/Row/Row'
import { Loader } from './Components/Loader/Loader'
import './App.css'

export const App = () => {
  const [active, setActive] = useState('')
  const [loader, setLoader] = useState(true)
  const [account, setAccount] = useState<string | undefined>()
  const [balances, setBalances] = useState<undefined|any[]>()
  window.ethereum.on('accountsChanged', (accounts: any) => {
    accounts.length === 0 && setAccount(undefined)
  })

  useEffect(() => {
    setTimeout(() => {
      setAccount(window.ethereum.selectedAddress)
      fetch(`http://localhost:8080/idle/${window.ethereum.selectedAddress}`)
        .then(res => res.json())
        .then(balances => {
          return balances.map((balance: any) => {
            let notUndefinedMissingRates = 0
            return {
            asset: balance.token,
            percentage: balance.ratesOfBalances.reduce((acc: number, curr: any) => {
              curr.missingRate !== 0 && notUndefinedMissingRates++
              return curr.missingRate !== 0 ? curr.missingRate + acc : acc
            }, 0) / notUndefinedMissingRates,
            usd: balance.ratesOfBalances.reduce((acc: number, curr: any) => curr.tokenMissing ? curr.tokenMissing + acc : acc, 0)
          }})
        })
        .then(balances => {
          setLoader(false)
          setBalances(balances)
        })
    }, 1000);
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
          {account ? `${account.slice(0, 5)}..${account.slice(-4)}` : 'Connect Wallet'}
        </div>
      </div>
      <hr/>
      <br/>
      <Row asset='asset' percentage='%' usd='$' link='ape'/>
      <hr/>
      <div className='pools__wrapper'>
        {balances?.map((balance: any) => <><Pools balance={balance} active={active} setActive={setActive}/>
        <hr/></>)}
      </div>
    </div>
  )
}
