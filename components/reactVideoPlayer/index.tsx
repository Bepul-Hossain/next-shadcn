import ReactPlayer from "react-player/youtube"

// const ReactPlayer = React.lazy(() => import('react-player/youtube'));

type propsTypes = {
  videoLink: string,
  poster:string
}

const VideoPlay = ({ videoLink, poster }: propsTypes) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player fixed-bottom"
        url={videoLink}
        width="auto"
        height="auto"
        light={poster}
        playing
      />
    </div>
  )
}

export default VideoPlay
