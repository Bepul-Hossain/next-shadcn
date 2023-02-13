import React from "react"
import { GetServerSideProps } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import useSWR from "swr"

import Song from "@/components/song"

const fetcher = (url) => fetch(url).then((res) => res.json())

const Hello = () => {
  const { data, error } = useSWR("/api/hello", fetcher)
  const router = useRouter()
  const { id } = router.query
  console.log(id)

  return (
    <>
      <h1 className="text-2xl">
        Data coming from: {id} {data[0].name}
        <Song
          name={data[0].name}
          videoLink={data[0].videoLink}
          lyrics={data[0].lyrics}
          index={1}
          key={data[0].name}
        />
      </h1>
    </>
  )
}
export default Hello
