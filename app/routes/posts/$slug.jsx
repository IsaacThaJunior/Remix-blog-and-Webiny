import { useParams } from '@remix-run/react'

export default function Slug() {
  const params = useParams()
  return (
    <div>
      <h1>The post directory is here</h1>
      <h2>This is for the slug sha</h2>
      <h3>This is for slug {params.slug} </h3>
    </div>
  )
}
