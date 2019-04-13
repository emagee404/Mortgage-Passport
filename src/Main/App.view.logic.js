import App from './App.view.js'
import Balance from './Balance.js'
import React from 'react'
import Transactions from './Transactions.js'

let AppLogic = props => {
  let accountId = '518a2ff1-2caa-4c8e-b9b0-5329718d6460'
  return (
    <Balance accountId={accountId}>
      {balance => (
        <Transactions accountId={accountId}>
          {transactions => (
            <App {...props} {...balance} transactions={transactions} />
          )}
        </Transactions>
      )}
    </Balance>
  )
}

export default AppLogic
