import { Link } from '../Link'

export default function AboutPage() {
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
      <Link to='/'>Go to home</Link>
    </>
  )
}
