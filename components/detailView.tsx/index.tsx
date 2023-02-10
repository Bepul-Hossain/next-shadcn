import Link from "next/link"

const DetailView = (props) => {
  const { item } = props
  return (
    <>
      <div>
        {item.name}
        <Link href={`songDetails/${item.name}`}>Product 1</Link>
      </div>
    </>
  )
}

export default DetailView
