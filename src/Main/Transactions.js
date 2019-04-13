import { Query } from 'react-apollo'
import dayjs from 'dayjs'
import gql from 'graphql-tag'
import React from 'react'

let remap = ({ amount: { amount, currency }, bookingDateTime, ...transaction }) => ({
  ...transaction,
  bookingDateTime: dayjs(bookingDateTime).format('DD/MM/YY'),
  amount,
  currency,
})

let Transactions = props => (
  <Query
    query={gql`
query getTransactions($accountId: String!, $page: String!) {
  list: GetAccountTransactions(
    AccountId: $accountId
    page: $page
  ) {
    data: Data {
      transaction: Transaction {
        accountId: AccountId
        creditDebitIndicator: CreditDebitIndicator
        bookingDateTime: BookingDateTime
        amount: Amount {
          amount: Amount
          currency: Currency
        }
      }
    }
  }
}
    `}
    variables={{
      accountId: props.accountId,
      page: "0"
    }}
  >
    {res =>
      props.children(
        res.data && res.data.list ? res.data.list.data.transaction.map(remap) : []
      )
    }
  </Query>
)
export default Transactions
