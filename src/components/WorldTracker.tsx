import type { ReactNode } from 'react'
import { AuxiPage } from 'auxi/react'

export function WorldTracker(): ReactNode {
  return (
    <AuxiPage name="world-tracker">
      <div className="panel">
        <h2>World Tracker</h2>
        <p className="sub">Phase 6 — map + markers coming soon.</p>
      </div>
    </AuxiPage>
  )
}
