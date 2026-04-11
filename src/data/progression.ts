import type { ProgressionStep } from './types'

export const PROGRESSION: ProgressionStep[] = [
  {
    phase: 'First 10 Minutes', color: '#8B6914', steps: [
      'Punch tree, get logs (at least 10)',
      'Craft planks > crafting table > wooden pickaxe',
      'Mine stone > stone pickaxe + stone sword',
      'Find or kill 3 sheep > craft bed',
      'Dig into hillside, place door + bed. Sleep.',
    ],
  },
  {
    phase: 'Early Game (Day 2-3)', color: '#d4d4d4', steps: [
      'Mine down to find iron (Y=16 peak)',
      'Smelt iron > iron pickaxe + bucket + shield',
      'Fill bucket with water. ALWAYS carry this.',
      'Find a village — grab potatoes, carrots, wheat',
      'Plant potatoes along your regular paths near water',
      'Craft torches (stack of 64+)',
    ],
  },
  {
    phase: 'Mid Game', color: '#f5a623', steps: [
      'Mine to Y=-59 for diamonds (need 5 min for pick + enchanting table)',
      'Craft diamond pickaxe',
      'Make obsidian: water bucket on lava source blocks',
      'Build first Nether portal',
      'Set up enchanting room (15 bookshelves)',
      'Enchant diamond pick with Fortune III',
      'Re-mine diamonds with Fortune III for 2-4x yield',
      'Mark key locations with buried chests and signs',
    ],
  },
  {
    phase: 'Nether Exploration', color: '#ff3333', steps: [
      'Enter Nether with cobblestone, food, and backup gear',
      'Build cobblestone shelter around portal (ghast protection)',
      'Find Nether Fortress (blaze spawners inside)',
      'Kill Blazes for blaze rods (need 7+)',
      'Start nether highway to connect overworld locations',
      'Your Nether X,Z = Overworld X,Z / 8',
    ],
  },
  {
    phase: 'Finding the End', color: '#4ee4e4', steps: [
      'Craft Eyes of Ender (blaze powder + ender pearls)',
      'Throw eyes to locate Stronghold direction',
      'Dig down to Stronghold, find End Portal room',
      'Fill portal frames with Eyes of Ender (up to 12)',
      'Gear up: diamond armor, bow, water bucket, food',
      'Fight Ender Dragon (destroy end crystals first)',
    ],
  },
  {
    phase: 'Endgame Logistics', color: '#33dd55', steps: [
      'Explore End Cities for shulker boxes',
      'Shulker boxes = portable chests (27 slots, pickupable)',
      'Craft Ender Chest (obsidian + eye of ender)',
      'Ender chest + shulker boxes = inventory solved forever',
      'Expand nether highway network',
      'Build auto-farms (iron farm is most impactful)',
    ],
  },
]
