import ReactPlayer from "react-player/youtube"

// const ReactPlayer = React.lazy(() => import('react-player/youtube'));

type propsTypes = {
  videoLink: string,
  poster:string
}

const ReactVideoPlayer = ({ videoLink, poster }: propsTypes) => {
  return (
    <div style={{height: '91%', width:'100%'}}>
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

export default ReactVideoPlayer
