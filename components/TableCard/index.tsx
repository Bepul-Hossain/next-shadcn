import React from "react"
import Image from "next/image"
import classNames from "classnames"

import styles from "./tableCard.module.scss"
import { Props } from "./types"
import Link from "next/link"

export default function TableCard(props: Props) {
  const { songType, title, brand } = props
  return (
    <div
      className={classNames({
        [styles.card]: true,
        [styles.listenNow]: songType === "Listen now",
        [styles.madeForYou]: songType === "Made for you",
      })}
    >
      <Link href={""}>   <Image src="/img/pic.png" width={200} height={200} alt="hello" /></Link>
      <p>{title? title:(<><br /></>)}</p>
      <h5>{brand?brand:(<><br/></>)}</h5>
    </div>
  )
}
