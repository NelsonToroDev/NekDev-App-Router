import './App.css'
import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'
import { Router } from './Router.jsx'

const appRoutes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '/twitch',
    component: () => <h3>New page for Twitch</h3>
  }
]

function App() {
  return (
    <main>
      <Router routes={appRoutes} />
    </main>
  )
}

export default App
