type propsTypes = {
    videoLink: string
  }
const LocalVideo = ({ videoLink }: propsTypes) => {
  return (
    <video controls src={videoLink} style={{ width: "auto", height: "auto" }} />
  )
}

export default LocalVideo
