import React from "react"
import { GetServerSideProps } from "next"
import Link from "next/link"

const Hello = ({ data, data2 }) => {
  const { title } = data2[0]
  console.log(title)
  return (
    <>
      <h1 className="text-2xl">
        Data coming from: <Link className="text-red-600" href={data.text}>{data.text}</Link>
      </h1>
      <p>Created: {data.createdDate}</p>
      <p>Random Number: {data.id}</p>
      <hr />
      <hr />
      <hr />
      <h1 className="text-2xl">
        <Link className="text-red-600" href="https://jsonplaceholder.typicode.com/posts">coming from jsonplaceholder</Link>
     
      </h1>
      <ol className="list-decimal">
        {data2 &&
          data2.slice(0, 10).map(({ title, id }) => (
            <li key={id}>
              {id}. {title}
            </li>
          ))}
      </ol>
    </>
  )
}
export default Hello

export const getServerSideProps: GetServerSideProps = async () => {
  const p = await fetch(`http://localhost:3000/api/apiTest`)
  const data = await p.json()
  const q = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const data2 = await q.json()
  return {
    props: {
      data: data,
      data2: data2,
    },
  }
}
