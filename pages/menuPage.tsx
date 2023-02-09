import TableCard from "@/components/TableCard"
import { Table } from "@/components/TableCard/types"
import styles from "./menuPage.module.scss"

const MenusPage = () => {
  const table1: Table[] = [
    {
      songType: "Listen now",
    },
    {
      songType: "Listen now",
    },
  ]
  const table2: Table[] = [
    {
      songType: "Made for you",
    },
    {
      songType: "Made for you",
    },
  ]

  return (
    <div className="bg-white p-10">
      <div className={styles.cardHolder}>
        <div>
          <h3>Listen for you</h3>
          <div className={styles.listenNow}>
            {table1?.map((item) => (
              <TableCard {...item} />
            ))}
          </div>
        </div>
        <div>
        <h3>Made for you</h3>
          <div className={styles.madeForYou}>
          {table2?.map((item) => (
            <TableCard {...item} />
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenusPage
