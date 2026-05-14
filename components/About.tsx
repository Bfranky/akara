import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <div className={styles.textCol}>
          <p className={styles.label}>Our Story</p>
          <h2 className={styles.heading}>
            A morning<br />
            <em>tradition</em><br />
            in Enugu
          </h2>
          <p className={styles.body}>
            Tucked inside the vibrant Thrillz and Groove complex on Ibusa Avenue, 
            Akara Ogbe has become the go-to morning spot for Independence Layout locals 
            and visitors alike. We open early and keep it simple — good food, real flavours, 
            honest prices.
          </p>
          <p className={styles.body}>
            From thick, steaming pap to golden akara fresh off the pan, every plate 
            is made with care. Pull up a seat, enjoy the rustic atmosphere, and start 
            your day right.
          </p>
          <div className={styles.stats}>
            <div>
              <span className={styles.num}>3.8★</span>
              <span className={styles.numLabel}>Google Rating</span>
            </div>
            <div className={styles.divider}/>
            <div>
              <span className={styles.num}>19</span>
              <span className={styles.numLabel}>Reviews</span>
            </div>
            <div className={styles.divider}/>
            <div>
              <span className={styles.num}>₦1–10k</span>
              <span className={styles.numLabel}>Per person</span>
            </div>
          </div>
        </div>
        <div className={styles.imageCol}>
          <div className={styles.imgBox}>
            <img
              src="https://kashgain.com/wp-content/uploads/2022/08/TJ7A0045-1536x1025.jpg"
              alt="Enugu restaurant warm atmosphere"
              className={styles.mainImg}
            />
            <div className={styles.tag}>
              <span>📍</span>
              Inside Thrillz &amp; Groove
            </div>
          </div>
          <div className={styles.floatCard}>
            <span className={styles.floatIcon}>🕕</span>
            <div>
              <strong>Open Daily</strong>
              <p>Morning · Closes 3 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
