import React from 'react'
import './styles.css'

type HeaderProps = {
  ethEnabled: () => Promise<void>
  account: string | undefined
}
export function Header({ ethEnabled, account }: HeaderProps) {
  return <div className='header__wrapper'>
    <div className='header__content'>
      <span>APYin</span>
      <span className='header__white'>Aave Historical Returns on Holdings Calculator</span>
      <div
        onClick={() => ethEnabled()}
        className='header__wallet'
      >
        {account ? `${account.slice(0, 5)}..${account.slice(-4)}` : 'Connect Wallet'}
      </div>
    </div>
  </div>
}
