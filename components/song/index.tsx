import React, { useEffect, useRef, useState } from "react"

import LocalVideo from "../localVideoPlayer"
import styles from "./index.module.scss"
import VideoPlayer from "../reactVideoPlayer"

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

      <li className={`para ${isClick ? "active" : ""}`}>
        <button className="button" onClick={handleToggle}>
          {index}. &nbsp; {name}
          <span className={styles.control}>{isClick ? "—" : "+"} </span>
        </button>
        <div
          ref={contentEl}
          className={styles.lyrics_wrapper}
          style={
            isClick
              ? { height: contentEl?.current?.scrollHeight }
              : { height: "0px" }
          }
        >
          <div className={styles.lyrics}>
            {/* {videoLink && <a href={videoLink} target="_blank" rel="noreferrer">Video link<br /></a>} */}
            {/* {videoLink && <button onClick={handlePlay}>{isPlay?"remove video":"start video"}</button>} */}
            {/* {videoLink && isClick &&<VideoPlayer videoLink={videoLink}/>}
          {!videoLink && isClick &&<LocalVideo videoLink="/video/amake-amar.mp4"/>} */}
            {lyrics && lyrics}
          </div>
        </div>
      </li>
    </div>
  )
}

export default Song
