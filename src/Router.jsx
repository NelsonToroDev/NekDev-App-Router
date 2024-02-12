import { useState, useEffect } from 'react'
import { EVENTS } from './consts'

export function Router({
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

  const Page = routes.find(({ path }) => path === currentPath)?.component
  return Page ? <Page /> : <DefaultComponent />
}
