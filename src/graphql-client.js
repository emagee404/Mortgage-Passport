import ApolloClient from 'apollo-client'
// import { WebSocketLink } from 'apollo-link-ws'
import { HttpLink } from 'apollo-link-http'
// import { split } from 'apollo-link'
// import { getMainDefinition } from 'apollo-utilities'
import { InMemoryCache } from 'apollo-cache-inmemory'

let httpLink = new HttpLink({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT_HTTP,
})

// // Create a WebSocket link:
// let wsLink = new WebSocketLink({
//   uri: process.env.REACT_APP_GRAPHQL_ENDPOINT_WS,
//   options: {
//     reconnect: true,
//   },
// })

// // using the ability to split links, you can send data to each link
// // depending on what kind of operation is being sent
// let link = split(
//   // split based on operation type
//   ({ query }) => {
//     let { kind, operation } = getMainDefinition(query)
//     return kind === 'OperationDefinition' && operation === 'subscription'
//   },
//   wsLink,
//   httpLink
// )

// Instantiate client
let client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})
export default client
