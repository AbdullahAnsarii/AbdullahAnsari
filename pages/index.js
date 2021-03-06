import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Social from '../components/Social'

export default function Home() {
  return (
    <div>
      <Head>
        <script src="https://www.googletagmanager.com/gtag/js?id=G-0HBE183M56" />
        <script src='/gtm.js' />
        <title>Abdullah Ansari | Full Stack Developer</title>
        <meta name="description" content="Abdullah Ansari Portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Social />
      <Contact />
    </div>
  )
}
