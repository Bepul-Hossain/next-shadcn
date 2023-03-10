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
        width="100%"
        height="100%"
        light={poster}
        playing
      />
    </div>
  )
}

export default VideoPlay
