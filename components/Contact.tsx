import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.label}>Find Us</p>
          <h2 className={styles.heading}>
            Come visit<br /><em>us</em>
          </h2>
          <div className={styles.details}>
            <div className={styles.item}>
              <span className={styles.icon}>📍</span>
              <div>
                <strong>Address</strong>
                <p>Ibusa Ave, Independence Layout<br />Enugu 400102, Enugu State</p>
                <p className={styles.hint}>Inside Thrillz &amp; Groove complex</p>
              </div>
            </div>
            <div className={styles.item}>
              <span className={styles.icon}>📞</span>
              <div>
                <strong>Phone</strong>
                <a href="tel:09043439345" className={styles.phone}>0904 343 9345</a>
              </div>
            </div>
            <div className={styles.item}>
              <span className={styles.icon}>🕐</span>
              <div>
                <strong>Hours</strong>
                <p>Open Daily · Closes 3 PM</p>
                <p className={styles.hint}>Best visited in the morning!</p>
              </div>
            </div>
            <div className={styles.item}>
              <span className={styles.icon}>🍽️</span>
              <div>
                <strong>Services</strong>
                <p>Dine-in · Takeaway · Delivery</p>
              </div>
            </div>
          </div>
          <a
            href="https://maps.google.com/?q=Ibusa+Ave,+Independence+Layout,+Enugu"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.dirBtn}
          >
            Get Directions ↗
          </a>
        </div>
        <div className={styles.right}>
          <div className={styles.mapBox}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.9!2d7.49!3d6.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjYnMjQuMCJOIDfCsDI5JzI0LjAiRQ!5e0!3m2!1sen!2sng!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Akara Ogbe location map"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
