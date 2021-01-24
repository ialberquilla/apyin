import React from 'react'
import './styles.css'

export const tabs = ['APY missed out', 'USD missed out', 'APY gained', 'USD gained', 'Reserve Amount']

type TabsProps = {
  activeTab: any
  setActiveTab: any
}

export function Tabs({ activeTab, setActiveTab }: TabsProps) {
  return <div className='tab-picker'>
    {tabs.map((tab: any) => <div
      className={`tab-picker__tab ${activeTab === tab ? 'active': ''}`}
      key={tab}
      onClick={() => setActiveTab(tab)}
    >
      {tab}
    </div>)}
  </div>
}
