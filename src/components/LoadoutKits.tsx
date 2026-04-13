import type { ReactNode } from 'react'
import { Page, Component, Element } from '@factoredui/react'
import { KITS } from '../data/kits'
import { KitCard } from './KitCard'
import styles from '../styles/kits.module.css'

export function LoadoutKits(): ReactNode {
  return (
    <Page name="loadout-kits">
      <div className="panel">
        <h2>Inventory Loadout Kits</h2>
        <p className="sub">Pre-planned inventories for common expeditions.</p>
        <Component name="kit-grid">
          <div className={styles.grid}>
            {KITS.map(kit => (
              <Element key={kit.name} name={`kit-${kit.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <KitCard kit={kit} />
              </Element>
            ))}
          </div>
        </Component>
      </div>
    </Page>
  )
}
