import type { ReactNode } from 'react'
import { AuxiPage } from 'auxi/react'

export function OreDepths(): ReactNode {
  return (
    <AuxiPage name="ore-depths">
      <div className="panel">
        <h2>Ore Distribution by Y-Level</h2>
        <p className="sub">Phase 3 — depth chart coming soon.</p>
      </div>
    </AuxiPage>
  )
}
