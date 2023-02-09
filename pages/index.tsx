import { useState } from "react"
import Head from "next/head"
import SONGS_DATA from "@/data/data"

import Songs from "@/components/songs"
import { Layout } from "@/components/layout"

export default function IndexPage() {
  const [query, setQuery] = useState("")

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
      <section className="flex justify-center bg-slate-400">
        <Songs data={SONGS_DATA} query={query} />
      </section>
    </Layout>
  )
}
