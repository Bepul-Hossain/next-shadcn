import React from 'react'
import { GetServerSideProps } from 'next';

 const  Hello = ({ data })=> {
    return(
        <h1>{data.text}</h1>
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