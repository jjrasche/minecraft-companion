import type { ReactNode } from 'react'
import styles from '../styles/tab-nav.module.css'

export type TabId = 'depth' | 'value' | 'recipes' | 'progression' | 'kits' | 'tracker'

interface Tab {
  id: TabId
  label: string
}

const TABS: Tab[] = [
  { id: 'depth', label: 'Ore Depths' },
  { id: 'value', label: 'Resource Value' },
  { id: 'recipes', label: 'Recipes' },
  { id: 'progression', label: 'Progression' },
  { id: 'kits', label: 'Loadout Kits' },
  { id: 'tracker', label: 'World Tracker' },
]

interface TabNavProps {
  activeTab: TabId
  onTabChange: (tab: TabId) => void
}

export function TabNav({ activeTab, onTabChange }: TabNavProps): ReactNode {
  return (
    <nav className={styles.nav}>
      {TABS.map(tab => (
        <button
          key={tab.id}
          className={`${styles.button} ${activeTab === tab.id ? styles.active : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  )
}
