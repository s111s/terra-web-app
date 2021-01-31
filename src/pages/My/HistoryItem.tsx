import { format as formatDate } from "date-fns"
import { truncate } from "../../libs/text"
import { useContractsAddress, useNetwork } from "../../hooks"
import ExtLink from "../../components/ExtLink"
import Badge from "../../components/Badge"
import Icon from "../../components/Icon"
import styles from "./HistoryItem.module.scss"

const HistoryItem = ({ txHash, type, datetime, token, data }: Tx) => {
  const { finder } = useNetwork()
  const { getSymbol } = useContractsAddress()
  const symbol = getSymbol(token)

  return (
    <article>
      <header className={styles.header}>
        <ExtLink href={finder(txHash, "tx")} className={styles.hash}>
          {truncate(txHash, [5, 5])}
          <Icon name="launch" size={12} />
        </ExtLink>

        {formatDate(new Date(datetime), "yyyy-MM-dd HH:mm")}
      </header>

      <section className={styles.main}>
        <Badge className={styles.badge}>{type}</Badge>
        {symbol}
      </section>

      <p className={styles.message} />
    </article>
  )
}

export default HistoryItem
