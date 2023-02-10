import React from "react"
import { useRouter } from "next/router"
import SONGS from "@/data/data"

import LocalVideo from "@/components/localVideoPlayer"

const Details = (props) => {
  const router = useRouter()
  const detailsId = router.query.detailsId
  console.log(detailsId)
  const { data } = props
  console.log(data[1])
  return (
    <>
      {!data[0].videoLink && <LocalVideo videoLink="/video/amake-amar.mp4" />}
      <p>{data[0].name && data[0].name}</p>
      <p>{data[0].lyrics && data[0].lyrics}</p>
    </>
  )
}
export default Details

export const getStaticProps = async () => {
  return {
    props: {
      data: SONGS,
    },
  }
}
