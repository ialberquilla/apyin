import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'
import reportWebVitals from './reportWebVitals'

import Web3Provider, { Connectors } from 'web3-react'
const { InjectedConnector } = Connectors

const connectors = { MetaMask: new InjectedConnector({supportedNetworks: [1, 3, 4, 5, 42]}) }

ReactDOM.render(
  <React.StrictMode>
    <Web3Provider connectors={connectors}>
      <App />
    </Web3Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
