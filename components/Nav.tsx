'use client'
import { useState, useEffect } from 'react'
import styles from './Nav.module.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Menu', 'Reviews', 'Contact']

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#hero" className={styles.logo}>
        <span className={styles.logoMain}>Akara Ogbe</span>
        <span className={styles.logoSub}>Enugu&apos;s Morning Ritual</span>
      </a>
      <ul className={`${styles.links} ${open ? styles.open : ''}`}>
        {links.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>
          </li>
        ))}
        <li>
          <a href="tel:09043439345" className={styles.cta}>Call Us</a>
        </li>
      </ul>
      <button className={styles.burger} onClick={() => setOpen(!open)} aria-label="menu">
        <span className={open ? styles.x1 : ''}/>
        <span className={open ? styles.x2 : ''}/>
        <span className={open ? styles.x3 : ''}/>
      </button>
    </nav>
  )
}
