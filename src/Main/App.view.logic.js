import App from './App.view.js'
import React, { useState } from 'react'

let AppLogic = props => {
  let [at, goTo] = useState('login')
  let [summaryTransactions, setSummaryTransactions] = useState(false)

  return (
    <App
      {...props}
      goTo={goTo}
      isDecision={at === 'decision'}
      isLogin={at === 'login'}
      isSummary={at === 'summary'}
      isSummaryTransactions={summaryTransactions}
      toggleSummaryTransactions={() =>
        setSummaryTransactions(!summaryTransactions)
      }
    />
  )
}

export default AppLogic
