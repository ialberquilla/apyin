import React from 'react'
import Logo from '../../assets/Logo.svg'
import './styles.css'

type HeaderProps = {
  ethEnabled: () => Promise<void>
  account: string | undefined
}
export function Header({ ethEnabled, account }: HeaderProps) {
  return <div className='header__wrapper'>
    <div className='header__content'>
      <div className='header__logo'>
        <img alt='Ape Logo' src={Logo} />
        <span>&nbsp;APYin</span>
      </div>
      <span className='header__white'>Aave Historical Returns on Holdings Calculator</span>
      <div
        onClick={() => ethEnabled()}
        className='header__wallet'
      >
        {account ? `${account.slice(0, 5)}..${account.slice(-4)}` : <div className='header__connect-wallet'>Connect Wallet</div>}
      </div>
    </div>
  </div>
}
