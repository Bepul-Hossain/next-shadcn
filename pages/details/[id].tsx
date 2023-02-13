import React from "react"
import { GetServerSideProps } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import useSWR from "swr"
import Song from "@/components/SongDetails"


const fetcher = (url) => fetch(url).then((res) => res.json())

const Hello = () => {
  const { data, error } = useSWR("/api/hello", fetcher)
  const router = useRouter()
  const { id } = router.query
  const songId = Number(id)
  return (
    <>
      <Song
        name={data[songId].name}
        videoLink={data[songId].videoLink}
        lyrics={data[songId].lyrics}
        index={1}
        key={data[songId].name}
      />
    </>
  )
}
export default Hello
