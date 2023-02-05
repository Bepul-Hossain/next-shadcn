import React from 'react'
import { GetServerSideProps } from 'next';
import Link from 'next/link';

 const  Hello = ({ data })=> {
    return(
      <>
        <h1>Data coming from: <Link href={data.text}>{data.text}</Link></h1>
        <h2>Created: {data.createdDate}</h2>
        <h2>Random Number: {data.id}</h2>
      </>
    )
}
export default Hello
// This gets called on every request
export const getServerSideProps : GetServerSideProps  = async () => {
    const p = await fetch(`http://localhost:3000/api/apiTest`) 
    const data = await p.json()
    return {
      props: {
        data: data
      }
    }
  }