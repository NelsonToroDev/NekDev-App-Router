import { Link } from '../components/Link'

export default function Page404() {
  return (
    <>
      <div>
        <h1>Page Not Found 404</h1>
        <img
          src='https://media1.tenor.com/m/5ety3Lx3QccAAAAC/its-fine-dog-fine.gif'
          alt='Gif of a dog burning itself'
        />
      </div>
      <Link to='/'>Back to Home</Link>
    </>
  )
}
