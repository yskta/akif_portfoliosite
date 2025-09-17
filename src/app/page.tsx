import Hero from '@/components/Hero'
import Achievements from '@/components/Achievements'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Achievements />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}