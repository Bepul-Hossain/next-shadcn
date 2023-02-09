type propsTypes = {
    videoLink: string
  }
const LocalVideo = ({ videoLink }: propsTypes) => {
  return (
    <video poster="https://placehold.it/640x360.jpg" controls src={videoLink} style={{ width: "300px", height: "260px" }} />
  )
}

export default LocalVideo
