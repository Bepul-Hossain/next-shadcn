import React, { useRef, useState } from "react";
import VideoPlayer from "./video";
interface Props{
  name?: string
  index:number
  lyrics?:string
  videoLink?:string
}

const Song: React.FC<Props> =({name, index, lyrics, videoLink}): JSX.Element=>{
  const [isClick, setIsClick] = useState(false);
  const contentEl = useRef<HTMLInputElement | null>(null);

  const handleToggle = () => {
    setIsClick(!isClick);
  };

  return(
    <li className={`para ${isClick ? "active" : ""}`}>
      <button className="button" onClick={handleToggle}>
        {index}. &nbsp; {name}
        <span className="control">{isClick ? "—" : "+"} </span>
      </button>
      <div
        ref={contentEl}
        className="lyrics_wrapper"
        style={
          isClick
            ? { height: contentEl?.current?.scrollHeight }
            : { height: "0px" }
        }
      >

        <div className="lyrics">
          {/* {videoLink && <a href={videoLink} target="_blank" rel="noreferrer">Video link<br /></a>} */}
          {/* {videoLink && <button onClick={handlePlay}>{isPlay?"remove video":"start video"}</button>} */}
          {videoLink && isClick &&<VideoPlayer videoLink={videoLink}/>}
          {lyrics}
        </div>
      </div>
    </li>
  )
}

export default Song