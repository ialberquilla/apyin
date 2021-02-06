import React, { useCallback, useEffect, useState } from 'react'
import { Table } from './Components/Table/Table'
import { Loader } from './Components/Loader/Loader'
import { Header } from './Components/Header/Header'
import { tokenLogos } from './assets/tokenLogos'
import './App.css'

let lastMove = 0

export const App = () => {
  const [active, setActive] = useState('')
  const [loader, setLoader] = useState(true)
  const [account, setAccount] = useState<string | undefined>()
  const [balances, setBalances] = useState<undefined | any[]>()

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
    fetch(`http://159.89.3.75:8080/idle/${process.env.SOMEONES_WALLET}`)
      .then(res => res.json())
      .then(balances => {
        return balances.map((balance: any) => {
          let nonZeroMissingRates = 0
          return {
            asset: balance.token,
            logo: tokenLogos[balance.token as keyof typeof tokenLogos],
            percentage: balance.ratesOfBalances.reduce((acc: number, curr: any) => {
              curr.missingRate !== 0 && nonZeroMissingRates++
              return curr.missingRate !== 0 ? curr.missingRate + acc : acc
            }, 0) / (nonZeroMissingRates || 1) * 100,
            usd: balance.ratesOfBalances.reduce((acc: number, curr: any) => curr.tokensMissing ? curr.tokensMissing + acc : acc, 0),
            totalIdleTime: balance.ratesOfBalances.reduce((acc: number, curr: any) => curr.timeIdle ? curr.timeIdle + acc : acc, 0),
            gains: balance.ratesOfBalances.reduce((acc: any, curr: any) => [...acc, ...curr.prices], [])
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
    <div className='App' style={{ opacity: loader ? .3 : 1, transition: 'opacity 100ms ease-in-out' }}>
      <div style={{
        justifyContent: 'flex-end',
        display: 'none',
        width: '200px',
        position: 'absolute',
        overflow: 'hidden',
        borderRadius: '50%'
      }}>
      </div>
      {loader && <Loader/>}
      <Header ethEnabled={ethEnabled} account={account}/>
      <Table balances={balances} active={active} setActive={setActive}/>
    </div>
  )
}
