import { Link } from '../components/Link'

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>This is a sample page to create a React Router from zero</p>
      <Link to='/about'>About us</Link>
    </>
  )
}
