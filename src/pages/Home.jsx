import { navigate } from '../navigate'

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>This is a sample page to create a React Router from zero</p>
      <button onClick={() => navigate('/about')}>About us</button>
    </>
  )
}
