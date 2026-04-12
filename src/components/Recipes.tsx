import type { ReactNode } from 'react'
import { AuxiPage } from '@factoredui/react'

export function Recipes(): ReactNode {
  return (
    <AuxiPage name="recipes">
      <div className="panel">
        <h2>Recipes</h2>
        <p className="sub">Phase 4 — recipe cards coming soon.</p>
      </div>
    </AuxiPage>
  )
}
