import { useEffect } from 'react'
import { Link } from '../Link'

export default function SearchPage({ routeParams }) {
  useEffect(() => {
    document.title = `looking for ${routeParams.query}`
  }, [])

  return (
    <>
      <h3>New page for query using parameters</h3>
      <h4>Query Param: {routeParams.query}</h4>
      <Link to='/'>Back to Home</Link>
    </>
  )
}
