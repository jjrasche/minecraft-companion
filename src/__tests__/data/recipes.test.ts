import { describe, it, expect } from 'vitest'
import { RECIPES } from '../../data/recipes'
import type { RecipeCategory, RecipeStage } from '../../data/types'

const VALID_CATEGORIES: RecipeCategory[] = [
  'essential', 'shelter', 'storage', 'combat', 'exploration', 'food', 'progression', 'tools',
]

const VALID_STAGES: RecipeStage[] = ['early', 'mid', 'late']

describe('RECIPES', () => {
  it('contains 26 recipes', () => {
    expect(RECIPES).toHaveLength(26)
  })

  it('every recipe grid has exactly 9 elements', () => {
    for (const recipe of RECIPES) {
      expect(recipe.grid).toHaveLength(9)
    }
  })

  it('every recipe has a valid category', () => {
    for (const recipe of RECIPES) {
      expect(VALID_CATEGORIES).toContain(recipe.category)
    }
  })

  it('every recipe has a valid stage', () => {
    for (const recipe of RECIPES) {
      expect(VALID_STAGES).toContain(recipe.stage)
    }
  })

  it('every recipe has non-empty name, why, and detail', () => {
    for (const recipe of RECIPES) {
      expect(recipe.name.length).toBeGreaterThan(0)
      expect(recipe.why.length).toBeGreaterThan(0)
      expect(recipe.detail.length).toBeGreaterThan(0)
    }
  })

  it('has unique recipe names', () => {
    const names = RECIPES.map(r => r.name)
    expect(new Set(names).size).toBe(names.length)
  })

  it('grid cells are either null or non-empty strings', () => {
    for (const recipe of RECIPES) {
      for (const cell of recipe.grid) {
        if (cell !== null) {
          expect(typeof cell).toBe('string')
          expect(cell.length).toBeGreaterThan(0)
        }
      }
    }
  })
})
