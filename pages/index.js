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
        <title>Abdullah Ansari | Full Stack Developer</title>
        <meta name="description" content="Abdullah Ansari Portfolio Website" />
        <link rel="icon" href="/fav.png" />
      </Head>
    <Main />
    <About />
    <Social />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
