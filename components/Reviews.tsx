import styles from './Reviews.module.css'

const reviews = [
  {
    name: 'Jennifer Okutalukwe',
    badge: 'Local Guide',
    rating: 5,
    time: '1 year ago',
    text: 'Pap: 10/10 — thick just the way I like it. Akara was a bit underdone mid-day, but the overall experience was lovely. Great spot for breakfast.',
    avatar: 'J',
  },
  {
    name: 'Eleweke Austin',
    badge: 'Local Guide · 929 reviews',
    rating: 4,
    time: '6 months ago',
    text: 'A place for quick breakfast. They sell majority of local dishes like akara, pap, toasted bread, eggs and hotdogs. It can take a while if you\'re very hungry, but worth the wait.',
    avatar: 'E',
  },
  {
    name: 'ChiChi',
    badge: 'Local Guide',
    rating: 5,
    time: '1 year ago',
    text: 'Located inside Thrillz and Groove. The food was yummy and the atmosphere is cool — pool table, rustic vibes. Loved it!',
    avatar: 'C',
  },
]

function Stars({ n }: { n: number }) {
  return (
    <span aria-label={`${n} stars`}>
      {[1,2,3,4,5].map(i => (
        <span key={i} style={{ color: i <= n ? '#D4A017' : 'rgba(255,255,255,0.15)', fontSize: '0.9rem' }}>★</span>
      ))}
    </span>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className={styles.reviews}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>What People Say</p>
          <h2 className={styles.heading}>Reviews</h2>
          <div className={styles.overall}>
            <span className={styles.score}>3.8</span>
            <div>
              <Stars n={4} />
              <p className={styles.count}>Based on 19 Google reviews</p>
            </div>
          </div>
        </div>
        <div className={styles.grid}>
          {reviews.map((r) => (
            <div key={r.name} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.avatar}>{r.avatar}</div>
                <div>
                  <p className={styles.reviewer}>{r.name}</p>
                  <p className={styles.reviewerBadge}>{r.badge}</p>
                </div>
              </div>
              <div className={styles.starRow}>
                <Stars n={r.rating} />
                <span className={styles.time}>{r.time}</span>
              </div>
              <p className={styles.text}>&quot;{r.text}&quot;</p>
            </div>
          ))}
        </div>
        <div className={styles.cta}>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            See all reviews on Google Maps ↗
          </a>
        </div>
      </div>
    </section>
  )
}
