import { useState, useEffect } from 'react'
import { EVENTS } from './consts'
import { match } from 'path-to-regexp'

export default function Router({
  routes = [],
  defaultComponent: DefaultComponent = () => <h1>404</h1>
}) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHEVENT, onLocationChange)
    window.addEventListener(EVENTS.POPEVENT, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHEVENT, onLocationChange)
      window.removeEventListener(EVENTS.POPEVENT, onLocationChange)
    }
  }, [])

  let routeParams = {}

  const Page = routes.find(({ path }) => {
    if (path === currentPath) return true

    // We Used path-to-regex to dectect dynamic routes
    const matcherURLFunction = match(path, { decode: decodeURIComponent })
    const matched = matcherURLFunction(currentPath)
    if (!matched) return false

    // Save retrieved params into routeParams
    // /search/:query => /search/sometext => { query: 'sometext'}
    routeParams = matched.params
    return true
  })?.component

  return Page
    ? <Page routeParams={routeParams} />
    : <DefaultComponent routeParams={routeParams} />
}
