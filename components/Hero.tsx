import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <p className={styles.eyebrow}>Est. in Enugu · Independence Layout</p>
        <h1 className={styles.title}>
          <span>Akara</span>
          <span className={styles.amp}>&</span>
          <span>Pap</span>
        </h1>
        <p className={styles.tagline}>
          Where every morning starts with something real.
        </p>
        <div className={styles.badges}>
          <span>🍳 Dine-in</span>
          <span>📦 Takeaway</span>
          <span>🛵 Delivery</span>
        </div>
        <div className={styles.actions}>
          <a href="#menu" className={styles.btnPrimary}>View Menu</a>
          <a href="tel:09043439345" className={styles.btnSecondary}>09043439345</a>
        </div>
        <div className={styles.hours}>
          <span className={styles.dot}/>
          Open daily · Closes 3 PM
        </div>
      </div>
      <div className={styles.scrollHint}>
        <span>Scroll</span>
        <div className={styles.line}/>
      </div>
    </section>
  )
}
