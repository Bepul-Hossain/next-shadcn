import { useState } from "react"
import Head from "next/head"
import Link from "next/link"
import SONGS_DATA from "@/data/data"
import useSWR from "swr"

import { Layout } from "@/components/layout"
import LocalVideo from "@/components/localVideoPlayer"
import ReactVideoPlayer from "@/components/reactVideoPlayer"
import styles from "./index.module.scss"

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function IndexPage() {
  const [query, setQuery] = useState("")
  const { data, error } = useSWR("/api/hello", fetcher)
  //Handle the error state
  if (error) return <div>Failed to load</div>
  //Handle the loading state
  if (!data) return <div>Loading...</div>

  console.log(SONGS_DATA)
  return (
    <Layout query={query} setQuery={setQuery}>
      <Head>
        <title>Bangla favorite songs</title>
        <meta
          name="description"
          content="Next.js template for building apps with Radix UI and Tailwind CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container">
        <h3>Listen for you</h3>
        <ul className={styles.ulClass}>
          {data
            ?.filter((item) =>
              item?.name?.toLowerCase().includes(query.toLowerCase())
            )
            .map((item, index) => (
              <li key={index}>
                {item.videoLink && (
                  <ReactVideoPlayer
                    videoLink={item.videoLink}
                    poster="/img/pic.png"
                  />
                )}
                {!item.videoLink && (
                  <LocalVideo videoLink="/video/amake-amar.mp4" />
                )}
                <Link href="/details/[id]" as={`/details/${index}`}>
                  {item.name}
                </Link>
              </li>
            ))}
        </ul>
      </section>
    </Layout>
  )
}
