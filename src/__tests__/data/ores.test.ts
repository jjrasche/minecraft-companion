import { describe, it, expect } from 'vitest'
import { ORES } from '../../data/ores'

describe('ORES', () => {
  it('contains 9 ore entries', () => {
    expect(ORES).toHaveLength(9)
  })

  it('every ore has yMin < yMax', () => {
    for (const ore of ORES) {
      expect(ore.yMin).toBeLessThan(ore.yMax)
    }
  })

  it('every ore has yPeak within [yMin, yMax]', () => {
    for (const ore of ORES) {
      expect(ore.yPeak).toBeGreaterThanOrEqual(ore.yMin)
      expect(ore.yPeak).toBeLessThanOrEqual(ore.yMax)
    }
  })

  it('every ore has a non-empty name, color, and note', () => {
    for (const ore of ORES) {
      expect(ore.name.length).toBeGreaterThan(0)
      expect(ore.color).toMatch(/^#[0-9a-fA-F]{3,6}$/)
      expect(ore.note.length).toBeGreaterThan(0)
    }
  })

  it('includes Diamond at the expected Y levels', () => {
    const diamond = ORES.find(o => o.name === 'Diamond')
    expect(diamond).toBeDefined()
    expect(diamond!.yMin).toBe(-64)
    expect(diamond!.yMax).toBe(16)
    expect(diamond!.yPeak).toBe(-59)
  })
})
