import { useState, useEffect } from 'react'
import './App.css'
import { EVENTS } from './consts.js'

function navigate(href) {
  window.history.pushState({}, '', href)

  // create a custom event to notify that URL was changed
  const navigationEvent = new Event(EVENTS.PUSHEVENT)
  window.dispatchEvent(navigationEvent) // Trigger our custom event
}

function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>This is a sample page to create a React Router from zero</p>
      <button onClick={() => navigate('/about')}>About us</button>
    </>
  )
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <img
          src='https://avatars.githubusercontent.com/u/4542698?s=400&u=a0e773d539532a734c0840c94442d20faf99f833&v=4'
          alt='About pic'
        />
        <p>Hello this a React Router clone</p>
      </div>
      <button onClick={() => navigate('/')}>Go to home</button>
    </>
  )
}

function App() {
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

  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
