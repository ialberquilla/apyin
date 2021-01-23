import React, { useCallback, useEffect, useState } from 'react'
import { Pools } from './Components/Pools/Pools'
import { Row } from './Components/Row/Row'
import { Loader } from './Components/Loader/Loader'
import './App.css'

let lastMove = 0

export const App = () => {
  const [active, setActive] = useState('')
  const [loader, setLoader] = useState(true)
  const [account, setAccount] = useState<string | undefined>()
  const [balances, setBalances] = useState<undefined|any[]>()

  window.ethereum.on('accountsChanged', (accounts: any) => {
    if (Date.now() - lastMove > 1000) {
      lastMove = Date.now()
      if (accounts.length === 0) {
        setAccount(undefined)
      } else {
        fetchData()
        setAccount(window.ethereum.selectedAddress)
      }
    }
  })

  function fetchData() {
    setLoader(true)
    fetch(`http://159.89.3.75:8080/idle/${window.ethereum.selectedAddress}`)
      .then(res => res.json())
      .then(balances => {
        return balances.map((balance: any) => {
          let nonZeroMissingRates = 0
          return {
            asset: balance.token,
            percentage: balance.ratesOfBalances.reduce((acc: number, curr: any) => {
              curr.missingRate !== 0 && nonZeroMissingRates++
              return curr.missingRate !== 0 ? curr.missingRate + acc : acc
            }, 0) / (nonZeroMissingRates || 1) * 100,
            usd: balance.ratesOfBalances.reduce((acc: number, curr: any) => curr.tokensMissing ? curr.tokensMissing + acc : acc, 0)
          }
        })
      })
      .then(balances => {
        setBalances(balances)
        setLoader(false)
      })
  }

  useEffect(() => {
    setTimeout(() => {
      setAccount(window.ethereum.selectedAddress)
      setLoader(true)
      fetchData()
      console.log(window.ethereum.selectedAddress)
      if (!window.ethereum.selectedAddress) setLoader(false)

    }, 1000);
  }, [account])

  const ethEnabled = useCallback(async () => {
    if (account) return
    setLoader(true)
    await window.ethereum.send('eth_requestAccounts')
    setTimeout(() => {
      setAccount(window.ethereum.selectedAddress)
      setLoader(false)
      fetchData()
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
        {balances?.map((balance: any) => <div key={balance.asset}><Pools balance={balance} active={active} setActive={setActive}/>
        <hr/></div>)}
      </div>
    </div>
  )
}
