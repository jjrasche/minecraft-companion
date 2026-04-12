import { useState, type ReactNode } from 'react'
import { AuxiFlow } from '@factoredui/react'
import { TabNav, type TabId } from './components/TabNav'
import { OreDepths } from './components/OreDepths'
import { ResourceValue } from './components/ResourceValue'
import { Recipes } from './components/Recipes'
import { Progression } from './components/Progression'
import { LoadoutKits } from './components/LoadoutKits'
import { WorldTracker } from './components/WorldTracker'

const PAGE_MAP: Record<TabId, () => ReactNode> = {
  depth: () => <OreDepths />,
  value: () => <ResourceValue />,
  recipes: () => <Recipes />,
  progression: () => <Progression />,
  kits: () => <LoadoutKits />,
  tracker: () => <WorldTracker />,
}

function App(): ReactNode {
  const [activeTab, setActiveTab] = useState<TabId>('depth')

  const ActivePage = PAGE_MAP[activeTab]

  return (
    <AuxiFlow name="minecraft-companion">
      <TabNav activeTab={activeTab} onTabChange={setActiveTab} />
      <ActivePage />
    </AuxiFlow>
  )
}

export default App
