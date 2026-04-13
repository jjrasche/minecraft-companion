import type { ReactNode } from 'react'
import type { Kit } from '../data/types'
import styles from '../styles/kits.module.css'

interface KitCardProps {
  kit: Kit
}

export function KitCard({ kit }: KitCardProps): ReactNode {
  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>{kit.name}</div>
      <ul className={styles.itemList}>
        {kit.items.map(kitItem => (
          <li key={kitItem.item} className={styles.kitItem}>
            <span className={styles.itemName}>{kitItem.item}</span>
            <span className={styles.itemQty}>{kitItem.qty}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
