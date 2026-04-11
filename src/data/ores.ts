import type { Ore } from './types'

export const ORES: Ore[] = [
  { name: 'Coal', color: '#555', yMin: 0, yMax: 256, yPeak: 96, note: 'Everywhere. Smelt logs into charcoal instead.' },
  { name: 'Iron', color: '#d4d4d4', yMin: -64, yMax: 256, yPeak: 16, note: 'Most important mid-game. Peak Y=16 and Y=232.' },
  { name: 'Copper', color: '#cc7744', yMin: -16, yMax: 112, yPeak: 48, note: 'Spyglass, lightning rods. Low priority.' },
  { name: 'Gold', color: '#f5a623', yMin: -64, yMax: 32, yPeak: -16, note: 'Powered rails, golden apples, piglin bartering.' },
  { name: 'Lapis', color: '#3355ff', yMin: -64, yMax: 64, yPeak: 0, note: 'Needed for enchanting. Hoard when found.' },
  { name: 'Redstone', color: '#ff3333', yMin: -64, yMax: 16, yPeak: -59, note: 'Automation fuel. Abundant at diamond level.' },
  { name: 'Diamond', color: '#4ee4e4', yMin: -64, yMax: 16, yPeak: -59, note: 'Peak generation at Y=-64, but mine at Y=-59 to avoid bedrock/lava. Air exposure reduces spawns.' },
  { name: 'Emerald', color: '#33dd55', yMin: -16, yMax: 256, yPeak: 236, note: 'Mountains only. Villager currency. Worth more than you think.' },
  { name: 'Ancient Debris', color: '#664433', yMin: 8, yMax: 119, yPeak: 15, note: 'Nether only. Becomes netherite. Endgame diamond upgrade.' },
]
