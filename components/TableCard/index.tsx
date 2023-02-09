import React from "react"
import classNames from "classnames"

import styles from "./tableCard.module.scss"
import { Props } from "./types"

export default function TableCard(props: Props) {
  const { songType } = props
  return (
    <div
      className={classNames({
        [styles.card]: true,
        [styles.listenNow]: songType === "Listen now",
        [styles.madeForYou]: songType === "Made for you",
      })}
    ></div>
  )
}
