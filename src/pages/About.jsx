import { Link } from '../components/Link'

console.log('We are loading about.jsx')

const i18n = {
  es: {
    title: 'Acerca de nosotros',
    description: 'Hola este es un React Router clone',
    goToHome: 'Volver al Inicio'
  },
  en: {
    title: 'About us',
    description: 'Hello this a React Router clone',
    goToHome: 'Go to home'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'en')

  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img
          src='https://avatars.githubusercontent.com/u/4542698?s=400&u=a0e773d539532a734c0840c94442d20faf99f833&v=4'
          alt='About pic'
        />
        <p>{i18n.description}</p>
      </div>
      <Link to='/'>{i18n.goToHome}</Link>
    </>
  )
}
