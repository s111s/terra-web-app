import { gql, useQuery } from "@apollo/client"
import { useWallet } from "../hooks"
import useStatsClient from "./useStatsClient"

const TXS = gql`
  query txs($account: String!) {
    txs(account: $account, limit: 999) {
      createdAt
      id
      height
      txHash
      address
      type
      data
      token
      datetime
      fee
      tags
      memo
    }
  }
`

const useTxs = () => {
  const client = useStatsClient()
  const { address } = useWallet()
  const query = useQuery<{ txs: Tx[] }>(TXS, {
    client,
    variables: { account: address },
  })

  return query
}

export default useTxs
