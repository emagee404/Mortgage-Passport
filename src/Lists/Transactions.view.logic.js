import TransactionsData from './TransactionsData.js'
import Transactions from './Transactions.view.js'
import React from 'react'

let TransactionsLogic = props => {
  let accountId = '518a2ff1-2caa-4c8e-b9b0-5329718d6460'

  return (
    <TransactionsData accountId={accountId} page={props.page}>
      {transactions => <Transactions from={transactions} />}
    </TransactionsData>
  )
}
export default TransactionsLogic
