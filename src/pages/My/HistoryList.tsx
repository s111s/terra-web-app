import useTxs from "../../statistics/useTxs"
import HistoryItem from "./HistoryItem"
import styles from "./HistoryList.module.scss"

const HistoryList = () => {
  const { data } = useTxs()

  return (
    <ul className={styles.list}>
      {data?.txs.map((item, index) => (
        <li className={styles.item} key={index}>
          <HistoryItem {...item} />
        </li>
      ))}
    </ul>
  )
}

export default HistoryList
