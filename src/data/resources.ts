import type { Resource } from './types'

export const RESOURCES: Resource[] = [
  { name: 'Water Bucket', score: 10, color: '#4488ff', note: 'Saves your life from lava, falls. Makes obsidian. #1 carry item.', stack: '1' },
  { name: 'Diamond', score: 10, color: '#4ee4e4', note: 'Tools, armor, enchanting table. Your mining reward.', stack: '64' },
  { name: 'Iron', score: 9, color: '#d4d4d4', note: 'Burns through fast: tools, armor, shields, buckets, hoppers, anvil.', stack: '64' },
  { name: 'Obsidian', score: 9, color: '#220033', note: 'Nether portals = 8x fast travel. Water on lava source blocks.', stack: '64' },
  { name: 'Netherite', score: 6, color: '#443322', note: "Endgame diamond upgrade. Doesn't burn in lava. Nice-to-have, not required — you can beat the game without it.", stack: '64' },
  { name: 'Wood', score: 8, color: '#8B6914', note: 'Crafting table, sticks, charcoal, tools. Always carry a stack.', stack: '64' },
  { name: 'Food (Potato)', score: 7, color: '#cc9944', note: 'Trail-plant along routes. Baked potatoes = easy food forever.', stack: '64' },
  { name: 'Coal/Charcoal', score: 7, color: '#555', note: 'Torches (light = safety). Smelt logs for charcoal underground.', stack: '64' },
  { name: 'Redstone', score: 7, color: '#ff3333', note: 'Automation. Abundant at diamond level.', stack: '64' },
  { name: 'Emerald', score: 6, color: '#33dd55', note: 'Value depends on YOU: if you skip villagers entirely = 2/10. One trading session for Mending books + enchanted gear = 7/10. The system is powerful but 100% optional. Even minimal interaction pays off huge.', stack: '64' },
  { name: 'Lapis', score: 6, color: '#3355ff', note: 'Enchanting only. Hoard when found, spend when enchanting.', stack: '64' },
  { name: 'Gold', score: 5, color: '#f5a623', note: 'Powered rails, piglin bartering, golden apples. Situational.', stack: '64' },
  { name: 'Copper', score: 3, color: '#cc7744', note: 'Spyglass is nice for scouting. Otherwise mostly decorative.', stack: '64' },
]
