import styles from './Menu.module.css'

const items = [
  {
    name: 'Pap (Akamu)',
    desc: 'Thick, smooth and piping hot — just the way Enugu likes it. Served with your choice of topping.',
    price: '₦200 – ₦600',
    badge: '⭐ Fan Favourite',
    img: 'https://cheflolaskitchen.com/wp-content/uploads/2020/10/Nigerian-Pap-2.jpg',
  },
  {
    name: 'Akara',
    desc: 'Deep-fried bean cakes, golden and crispy on the outside. Best paired with fresh pap.',
    price: '₦100 – ₦400',
    badge: null,
    img: 'https://www.allnigerianrecipes.com/wp-content/uploads/2013/01/akara-nigerian-bean-cake.jpg',
  },
  {
    name: 'Toasted Bread',
    desc: 'Perfectly toasted slices served warm. Great with eggs or a cup of tea.',
    price: '₦150 – ₦300',
    badge: null,
    img: 'https://i.pinimg.com/736x/0e/2a/b2/0e2ab2e1e8e5b5f1c6e6e1e1e1e1e1e1.jpg',
  },
  {
    name: 'Fried Eggs',
    desc: 'Freshly fried to your liking. A hearty addition to any morning plate.',
    price: '₦250 – ₦500',
    badge: null,
    img: 'https://i.pinimg.com/736x/cb/5e/8e/cb5e8e1e8e5b5f1c6e6e1e1e1e1e1e1e.jpg',
  },
  {
    name: 'Hotdogs',
    desc: 'Juicy sausages, grilled and served hot. A crowd-pleaser for kids and adults.',
    price: '₦300 – ₦700',
    badge: null,
    img: 'https://kashgain.com/wp-content/uploads/2022/08/TJ7A0045-1536x1025.jpg',
  },
  {
    name: 'Full Breakfast Combo',
    desc: 'Pap + Akara + Egg + Toasted bread — the complete morning spread.',
    price: '₦800 – ₦1,500',
    badge: '🔥 Best Value',
    img: 'https://cheflolaskitchen.com/wp-content/uploads/2020/10/Nigerian-Pap-2.jpg',
  },
]

export default function Menu() {
  return (
    <section id="menu" className={styles.menu}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>What We Serve</p>
          <h2 className={styles.heading}>The Menu</h2>
          <p className={styles.sub}>
            Simple, satisfying Nigerian breakfast — made fresh every morning.
          </p>
        </div>
        <div className={styles.grid}>
          {items.map((item) => (
            <div key={item.name} className={styles.card}>
              <div className={styles.cardImg}>
                <img src={item.img} alt={item.name} />
                {item.badge && <span className={styles.badge}>{item.badge}</span>}
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardName}>{item.name}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
                <p className={styles.cardPrice}>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <p className={styles.note}>
          * Prices are estimates. Menu subject to change. Call us for today&apos;s availability.
        </p>
      </div>
    </section>
  )
}
