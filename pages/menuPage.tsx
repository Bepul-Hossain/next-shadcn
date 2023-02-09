import TableCard from "@/components/TableCard"
import { Table } from "@/components/TableCard/types"
import styles from "./menuPage.module.scss"

const MenusPage = () => {
  const table1: Table[] = [
    {
      songType: "Listen now",
      title: "amake amar moto",
      brand: "car poka",
    },
    {
      songType: "Listen now",
      title: "o amar bondhu",
      brand: "tichan",
    },
    {
      songType: "Listen now",
      title: "chiro shathi",
      brand: "basto bota",
    },
    {
      songType: "Listen now",
      title: "cholona hoi",
      brand: "car poka",
    },
    {
      songType: "Listen now",
      title: "cholona hoi",
      brand: "car poka",
    },
  ]
  const table2: Table[] = [
    {
      songType: "Made for you",
      title: "o amar bondhu ",
    },
    {
      songType: "Made for you",
      brand: "asif",
    },
  ]

  return (
    <div className="bg-white p-10">
      <div className={styles.listenCardHolder}>
        <h3><strong> Listen for you</strong></h3>
        <p>Top picks for you. Updated daily</p>
        <hr />
        <div className={styles.listenNow}>
          {table1?.map((item) => (
            <TableCard {...item} />
          ))}
        </div>
      </div>
      <br />
      <div className={styles.madeForYouCardHolder}>
        <h3><strong>Made for you</strong></h3>
        <p>Your personal playlists. Updated daily.</p>
        <hr />
        <div className={styles.madeForYou}>
          {table2?.map((item) => (
            <TableCard {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MenusPage
