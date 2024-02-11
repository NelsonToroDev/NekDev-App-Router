import { useState } from 'react'
import './App.css'

function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>This is a sample page to create a React Router from zero</p>
      <a href='/about'>About us</a>
    </>
  )
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <img src='https://avatars.githubusercontent.com/u/4542698?s=400&u=a0e773d539532a734c0840c94442d20faf99f833&v=4' alt='About pic'/>
        <p>Hello this a React Router clone</p>
      </div>
      <a href='/'>Go to home</a>
    </>
  )
}

function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
