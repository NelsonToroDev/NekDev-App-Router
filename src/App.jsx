import { lazy, Suspense } from 'react'

// static import it will be downloaded even when it won't be required
// import HomePage from './pages/Home.jsx'
// import AboutPage from './pages/About.jsx'
// import Page404 from './pages/Page404.jsx'
// import SearchPage from './pages/Search.jsx'
import { Router } from './components/Router.jsx'
import { Route } from './components/Route.jsx'

// Lazy loading imports
const LazyHomePage = lazy(() => import('./pages/Home.jsx')) // dynamic import return a Promise
const LazyAboutPage = lazy(() => import('./pages/About.jsx'))
const LazyPage404 = lazy(() => import('./pages/Page404.jsx'))
const LazySearchPage = lazy(() => import('./pages/Search.jsx'))

const appRoutes = [
  {
    // Internationalization support
    path: '/:lang/about',
    Component: LazyAboutPage
  },
  {
    path: '/search/:query',
    Component: LazySearchPage
  }
]

function App() {
  return (
    <main>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Router routes={appRoutes} defaultComponent={LazyPage404}>
          <Route path='/' Component={LazyHomePage} />
          <Route path='/about' Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
