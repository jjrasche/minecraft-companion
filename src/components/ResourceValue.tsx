import { useState, type ReactNode } from 'react'
import { Page, Component, Element } from '@factoredui/react'
import { RESOURCES } from '../data/resources'
import styles from '../styles/value-list.module.css'

const STACKING_REFERENCE = [
  { item: 'Tools / Weapons / Armor', stack: '1', note: 'Each piece = 1 slot. Biggest inventory hog.' },
  { item: 'Beds', stack: '1', note: 'Always worth the slot though.' },
  { item: 'Buckets (empty/water/lava)', stack: '1', note: 'Only empty buckets stack to 16.' },
  { item: 'Ender Pearls', stack: '16', note: 'Teleport + Eye of Ender ingredient.' },
  { item: 'Eggs / Snowballs', stack: '16', note: 'Projectiles.' },
  { item: 'Signs', stack: '16', note: 'For labeling your chests.' },
  { item: 'Banners', stack: '16', note: 'Map markers.' },
  { item: 'Boats / Minecarts', stack: '1', note: 'Transport items.' },
  { item: 'Everything else', stack: '64', note: 'Blocks, ores, food, torches, etc.' },
]

function formatStackBadge(stack: string): string {
  return stack === '1' ? 'No stack' : `x${stack}`
}

export function ResourceValue(): ReactNode {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  function toggleExpand(index: number): void {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <Page name="resource-value">
      <div className="panel">
        <h2>Resource Value (Explorer/Miner)</h2>
        <p className="sub">Click any resource to see notes. Sorted by value score.</p>
        <Component name="value-list">
          <div className={styles.list}>
            {RESOURCES.map((resource, index) => (
              <Element key={resource.name} name={`resource-${resource.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <div>
                  <div
                    className={styles.item}
                    onClick={() => toggleExpand(index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={event => event.key === 'Enter' && toggleExpand(index)}
                    aria-expanded={expandedIndex === index}
                  >
                    <div className={styles.name} style={{ color: resource.color }}>
                      {resource.name}
                    </div>
                    <div className={styles.barBackground}>
                      <div
                        className={styles.barFill}
                        style={{ width: `${resource.score * 10}%`, background: resource.color }}
                      />
                    </div>
                    <span className={styles.stackBadge}>{formatStackBadge(resource.stack)}</span>
                    <div className={styles.score}>{resource.score}/10</div>
                  </div>
                  {expandedIndex === index && (
                    <div className={styles.note}>{resource.note}</div>
                  )}
                </div>
              </Element>
            ))}
          </div>
        </Component>

        <h3>Stacking Reference</h3>
        <Component name="stacking-reference">
          <table className={styles.stackTable}>
            <thead>
              <tr><th>Item</th><th>Stack</th><th>Note</th></tr>
            </thead>
            <tbody>
              {STACKING_REFERENCE.map(row => (
                <tr key={row.item}>
                  <td>{row.item}</td>
                  <td>{row.stack}</td>
                  <td>{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Component>
      </div>
    </Page>
  )
}
