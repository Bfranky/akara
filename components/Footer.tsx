import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logo}>Akara Ogbe</span>
          <p>Enugu&apos;s Morning Ritual</p>
        </div>
        <div className={styles.middle}>
          <p>Ibusa Ave, Independence Layout, Enugu</p>
          <p>Open Daily · Closes 3 PM</p>
        </div>
        <div className={styles.right}>
          <a href="tel:09043439345">0904 343 9345</a>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">Google Maps ↗</a>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Akara Ogbe · Enugu, Nigeria</p>
        <p>₦1 – ₦10,000 per person</p>
      </div>
    </footer>
  )
}
