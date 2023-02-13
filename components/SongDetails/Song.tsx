import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"

import LocalVideo from "../localVideoPlayer"
import VideoPlayer from "../reactVideoPlayer"
import styles from "./song.module.scss"

interface Props {
  name?: string
  index: number
  lyrics?: string
  videoLink?: string
}

const Song: React.FC<Props> = ({
  name,
  index,
  lyrics,
  videoLink,
}): JSX.Element => {
  const [isClick, setIsClick] = useState(false)
  const [flag, setFlag] = useState(false)
  const contentEl = useRef<HTMLInputElement | null>(null)

  const handleToggle = () => {
    setIsClick(!isClick)
  }
  useEffect(() => {
    setTimeout(() => {
      setFlag(true)
    }, 100)
  }, [])

  return (
    <div className={styles.item}>
      {flag && videoLink && (
        <VideoPlayer videoLink={videoLink} poster="/img/pic.png" />
      )}
      {!videoLink && <LocalVideo videoLink="/video/amake-amar.mp4" />}

      <li>
        <div className={styles.button} onClick={handleToggle}>
          <div className={styles.buttonDesign}>
            <div className={styles.name}>
              {index}. &nbsp; {name}
            </div>
            <div className={styles.control}>{isClick ? "—" : "+"}</div>
          </div>
          {/* {index}. &nbsp; {name}
          <span className={styles.control}>{isClick ? "—" : "+"} </span> */}
        </div>
        <div
          ref={contentEl}
          className={styles.lyrics_wrapper}
          style={
            true
              ? { height: contentEl?.current?.scrollHeight }
              : { height: "0px" }
          }
        >
          <div className={styles.lyrics}>{lyrics && lyrics}</div>
        </div>
      </li>
    </div>
  )
}

export default Song
