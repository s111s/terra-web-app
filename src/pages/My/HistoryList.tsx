import Card from "../../components/Card"
import useTxs from "../../statistics/useTxs"
import HistoryItem from "./HistoryItem"
import styles from "./HistoryList.module.scss"

const HistoryList = () => {
  const { data } = useTxs()

  return (
    <Card title="Transaction History">
      <ul className={styles.list}>
        {data?.txs.map((item, index) => (
          <li className={styles.item} key={index}>
            <HistoryItem {...item} />
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default HistoryList
