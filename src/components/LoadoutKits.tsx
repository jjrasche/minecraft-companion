import type { ReactNode } from 'react'
import { AuxiPage, AuxiComponent, AuxiElement } from '@factoredui/react'
import { KITS } from '../data/kits'
import { KitCard } from './KitCard'
import styles from '../styles/kits.module.css'

export function LoadoutKits(): ReactNode {
  return (
    <AuxiPage name="loadout-kits">
      <div className="panel">
        <h2>Inventory Loadout Kits</h2>
        <p className="sub">Pre-planned inventories for common expeditions.</p>
        <AuxiComponent name="kit-grid">
          <div className={styles.grid}>
            {KITS.map(kit => (
              <AuxiElement key={kit.name} name={`kit-${kit.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <KitCard kit={kit} />
              </AuxiElement>
            ))}
          </div>
        </AuxiComponent>
      </div>
    </AuxiPage>
  )
}
