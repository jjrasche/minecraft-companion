import type { ReactNode } from 'react'
import { AuxiPage } from 'auxi/react'

export function LoadoutKits(): ReactNode {
  return (
    <AuxiPage name="loadout-kits">
      <div className="panel">
        <h2>Inventory Loadout Kits</h2>
        <p className="sub">Phase 3 — kit cards coming soon.</p>
      </div>
    </AuxiPage>
  )
}
