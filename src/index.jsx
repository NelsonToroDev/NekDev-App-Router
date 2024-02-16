export { Router } from './components/Router'
export { Route } from './components/Route'
export { Link } from './components/Link'

// Isomorphic to be use on server side rendering and client side rendering
export function useQueryParams({ req } = {}) {
  const isServer = typeof window === 'undefined'
  if (isServer) {
    const { query } = req
    return query
  }

  const search = window.location.search
  const params = new URLSearchParams(search)
  return Object.fromEntries(params.entries())
}
