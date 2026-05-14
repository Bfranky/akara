import styles from './Gallery.module.css'

const photos = [
  {
    src: 'https://cheflolaskitchen.com/wp-content/uploads/2020/10/Nigerian-Pap-2.jpg',
    alt: 'Thick Nigerian pap',
    label: 'Fresh Pap',
  },
  {
    src: 'https://www.allnigerianrecipes.com/wp-content/uploads/2013/01/akara-nigerian-bean-cake.jpg',
    alt: 'Crispy akara bean cakes',
    label: 'Golden Akara',
  },
  {
    src: 'https://i.pinimg.com/originals/2d/6a/2f/2d6a2f5c6e1e8c1b3b3b3b3b3b3b3b3b.jpg',
    alt: 'Nigerian fried egg and bread breakfast',
    label: 'Egg & Bread',
  },
  {
    src: 'https://kashgain.com/wp-content/uploads/2022/08/TJ7A0045-1536x1025.jpg',
    alt: 'Enugu restaurant dining',
    label: 'The Vibe',
  },
]

export default function Gallery() {
  return (
    <section className={styles.gallery}>
      <div className={styles.strip}>
        {photos.map((p) => (
          <div key={p.label} className={styles.item}>
            <img src={p.src} alt={p.alt} />
            <span className={styles.label}>{p.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
