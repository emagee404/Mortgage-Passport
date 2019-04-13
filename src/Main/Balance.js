import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import React from 'react'

let Balance = props => (
  <Query
    query={gql`
      query getBalance($accountId: String!) {
        list: GetAccountBalances(AccountId: $accountId) {
          data: Data {
            balances: Balance {
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
    }}
  >
    {res =>
      props.children(
        res.data && res.data.list ? res.data.list.data.balances[0].amount : {}
      )
    }
  </Query>
)
export default Balance
