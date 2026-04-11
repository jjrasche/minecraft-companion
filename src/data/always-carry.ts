import type { CarryItem } from './types'

export const ALWAYS_CARRY: CarryItem[] = [
  { name: 'Water Bucket', color: '#4488ff', stack: '1 slot', sprite: 'Water_Bucket' },
  { name: 'Bed', color: '#9966cc', stack: '1 slot', sprite: 'White_Bed' },
  { name: 'Pickaxe', color: '#d4d4d4', stack: '1 slot', sprite: 'Iron_Pickaxe' },
  { name: 'Sword', color: '#d4d4d4', stack: '1 slot', sprite: 'Iron_Sword' },
  { name: 'Torches', color: '#f5a623', stack: 'x64', sprite: 'Torch' },
  { name: 'Food', color: '#cc9944', stack: 'x64', sprite: 'Cooked_Beef' },
  { name: 'Wood Logs', color: '#8B6914', stack: 'x64 (= crafting table)', sprite: 'Oak_Log' },
  { name: 'Shield', color: '#888', stack: 'FREE (off-hand)', sprite: 'Shield' },
]
