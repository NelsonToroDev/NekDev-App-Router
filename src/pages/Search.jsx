import { useEffect } from 'react'
import { Link } from '../components/Link'
import { useQueryParams } from '..'

export default function SearchPage({ routeParams }) {
  const queryParams = useQueryParams()

  useEffect(() => {
    document.title = `looking for ${routeParams.query}`
  }, [])

  return (
    <>
      <h3>New page for query using parameters</h3>
      <h4>Route Param: {routeParams.query}</h4>
      <div>
        <h4>Query Params:</h4>
        <ul>
          {Object.entries(queryParams).map(([paramName, paramValue], index) => (
            <li key={index}>
              {paramName}: {paramValue}
            </li>
          ))}
        </ul>
      </div>
      <Link to='/'>Back to Home</Link>
    </>
  )
}
