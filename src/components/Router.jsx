import { EVENTS } from '../utils/consts.js'
import { useState, useEffect, Children } from 'react'
import { match } from 'path-to-regexp'
import { getCurrentPath } from '../utils/getCurrentPath.js'

export function Router({
  children,
  routes = [],
  defaultComponent: DefaultComponent = () => <h1>Error 404</h1>
}) {
  const [currentPath, setCurrentPath] = useState(getCurrentPath())

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(getCurrentPath())
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  let routeParams = {}

  // add routes from children <Route /> component
  const routesFromChildren = Children.map(children, ({ props, type }) => {
    // children.props is an object in the form {path: '/', Component: f }
    const { name } = type
    const isRoute = name === 'Route'
    return isRoute ? props : null
  })

  // filter undefined and nulls references from the array
  const routeToUse = routes.concat(routesFromChildren).filter(Boolean)

  const Page = routeToUse.find(({ path }) => {
    if (path === currentPath) return true

    // We Used path-to-regex to dectect dynamic routes
    const matcherURLFunction = match(path, { decode: decodeURIComponent })
    const matched = matcherURLFunction(currentPath)
    if (!matched) return false

    // Save retrieved params into routeParams
    // /search/:query => /search/sometext => { query: 'sometext'}
    routeParams = matched.params
    return true
  })?.Component

  return Page ? (
    <Page routeParams={routeParams} />
  ) : (
    <DefaultComponent routeParams={routeParams} />
  )
}
