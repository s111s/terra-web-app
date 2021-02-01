import { format as formatDate } from "date-fns"
import { formatAsset } from "../../libs/parse"
import { useContractsAddress, useNetwork } from "../../hooks"
import ExtLink from "../../components/ExtLink"
import Icon from "../../components/Icon"
import useParseTx from "./useParseTx"
import styles from "./HistoryItem.module.scss"

const HistoryItem = ({ txHash, type, datetime, token, data }: Tx) => {
  const { finder } = useNetwork()
  const { getSymbol } = useContractsAddress()
  const symbol = getSymbol(token)
  const parseTx = useParseTx()

  return (
    <>
      <article className={styles.component}>
        <section className={styles.main}>
          <p>
            <span className={styles.type}>
              {type.replace("_", " ").toLowerCase()}
            </span>{" "}
            {formatAsset(data.amount, symbol)}
          </p>

          <ExtLink href={finder(txHash, "tx")} className={styles.hash}>
            <Icon name="launch" size={16} />
          </ExtLink>
        </section>

        <footer className={styles.footer}>
          <Icon name="calendar_today" size={16} />
          {formatDate(new Date(datetime), "LLL dd, yyyy, HH:mm aa")}
        </footer>
      </article>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export default HistoryItem
