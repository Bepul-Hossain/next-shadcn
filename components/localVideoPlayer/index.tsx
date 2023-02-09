type propsTypes = {
    videoLink: string
  }
const LocalVideo = ({ videoLink }: propsTypes) => {
  return (
    <video poster="https://placehold.it/640x360.jpg" controls src={videoLink} style={{ width: "320px", height: "180px" }} />
  )
}

export default LocalVideo
