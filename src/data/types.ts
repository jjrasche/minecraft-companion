export interface Ore {
  name: string
  color: string
  yMin: number
  yMax: number
  yPeak: number
  note: string
}

export interface Resource {
  name: string
  score: number
  color: string
  note: string
  stack: string
}

export interface CarryItem {
  name: string
  color: string
  stack: string
  sprite: string
}

export type RecipeCategory =
  | 'essential'
  | 'shelter'
  | 'storage'
  | 'combat'
  | 'exploration'
  | 'food'
  | 'progression'
  | 'tools'

export type RecipeStage = 'early' | 'mid' | 'late'

/** 9-element array, row-major 3x3. null = empty cell. */
export type CraftingGrid = (string | null)[]

export interface Recipe {
  name: string
  category: RecipeCategory
  stage: RecipeStage
  alwaysCarry: boolean
  grid: CraftingGrid
  why: string
  detail: string
}

export interface ProgressionStep {
  phase: string
  color: string
  steps: string[]
}

export interface KitItem {
  item: string
  qty: string
}

export interface Kit {
  name: string
  items: KitItem[]
}

export interface Marker {
  id: string
  name: string
  x: number
  y: number
  z: number
  type: MarkerType
}

export type MarkerType =
  | 'chest'
  | 'portal'
  | 'base'
  | 'mine'
  | 'village'
  | 'structure'
  | 'poi'
