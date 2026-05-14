'use client'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Gallery from '../components/Gallery'
import About from '../components/About'
import Menu from '../components/Menu'
import Reviews from '../components/Reviews'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Gallery />
      <About />
      <Menu />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  )
}
