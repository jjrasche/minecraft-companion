import type { Kit } from './types'

export const KITS: Kit[] = [
  {
    name: 'Mining Expedition', items: [
      { item: 'Iron/Diamond Pickaxe', qty: '2-3' },
      { item: 'Torches', qty: '64+' },
      { item: 'Water Bucket', qty: '1 (mandatory)' },
      { item: 'Food (baked potatoes)', qty: '32+' },
      { item: 'Wood Logs', qty: '16' },
      { item: 'Furnace', qty: '1' },
      { item: 'Crafting Table', qty: '1' },
      { item: 'Sword/Shield', qty: '1 each' },
      { item: 'Empty Chests', qty: '4' },
      { item: 'Bed', qty: '1 (reset spawn)' },
    ],
  },
  {
    name: 'Surface Exploration', items: [
      { item: 'Bed', qty: '1' },
      { item: 'Food', qty: '32+' },
      { item: 'Wood Logs', qty: '32' },
      { item: 'Water Bucket', qty: '1' },
      { item: 'Map + Compass', qty: '1 each' },
      { item: 'Spyglass', qty: '1' },
      { item: 'Sword + Shield', qty: '1 each' },
      { item: 'Iron Pickaxe', qty: '1' },
      { item: 'Empty Chests', qty: '2-4' },
      { item: 'Potatoes', qty: '8+ (plant along route)' },
    ],
  },
  {
    name: 'Nether Run', items: [
      { item: 'Cobblestone', qty: '128+' },
      { item: 'Food', qty: '32+' },
      { item: 'Iron/Diamond Armor', qty: 'full set' },
      { item: 'Sword + Shield', qty: '1 each' },
      { item: 'Bow + Arrows', qty: '1 + 32' },
      { item: 'Flint & Steel', qty: '1 (relight portal)' },
      { item: 'Pickaxe', qty: '2' },
      { item: 'Gold Boots', qty: "1 (piglins won't attack)" },
    ],
  },
  {
    name: 'Roadside Chest (stock)', items: [
      { item: 'Torches', qty: '16' },
      { item: 'Food (cooked)', qty: '8' },
      { item: 'Wood Logs', qty: '8' },
      { item: 'Coal', qty: '8' },
      { item: 'Iron Ingots', qty: '4' },
      { item: 'Cobblestone', qty: '16' },
    ],
  },
]
