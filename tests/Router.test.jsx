import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import Router from '../src/components/Router.jsx'
import Route from '../src/components/Route.jsx'
import { getCurrentPath } from '../src/utils/getCurrentPath.js'
import { Link } from '../src/components/Link.jsx'

vi.mock('./utils/getCurrentPath.js', () => ({
  getCurrentPath: vi.fn()
}))

describe('Router', () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  // it('should render without problems', () => {
  //   render(<Router routes={[]} />)
  //   expect(true).toBeTruthy()
  // })

  // it('should render 404 is no routes match', () => {
  //   render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
  //   expect(screen.getByText('404')).toBeTruthy()
  // })

  // it('should render the component for the first matching in routes', () => {
  //   getCurrentPath.mockReturnValue('/about')

  //   const routes = [
  //     {
  //       path: '/',
  //       Component: () => <h1>Home</h1>
  //     },
  //     {
  //       path: '/about',
  //       Component: () => <h1>About</h1>
  //     }
  //   ]

  //   render(<Router routes={routes} />)
  //   expect(screen.getByText('About')).toBeTruthy()
  // })

  it('should navigate using Links', async () => {
    getCurrentPath.mockReturnValueOnce('/')

    render(
      <Router>
        <Route
          path='/'
          Component={() => {
            return (
              <>
                <h1>Home</h1>
                <Link to='/about'>Go to About</Link>
              </>
            )
          }}
        />
        <Route path='/about' Component={() => <h1>About</h1>} />
      </Router>
    )

    // Click on the link
    const anchor = screen.getByText(/Go to About/)
    fireEvent.click(anchor)
    console.log(screen.debug())
    const aboutTitle = await screen.findByText('About')

    // Check that the new route is rendered
    expect(aboutTitle).toBeTruthy()
  })
})
