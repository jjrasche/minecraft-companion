import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { OreDepths } from '../../components/OreDepths'

describe('OreDepths', () => {
  it('renders 9 ore markers', () => {
    render(<OreDepths />)
    const oreNames = [
      'Coal', 'Iron', 'Copper', 'Gold', 'Lapis',
      'Redstone', 'Diamond', 'Emerald', 'Ancient Debris',
    ]
    for (const name of oreNames) {
      expect(screen.getByText(new RegExp(`^${name} \\(peak`))).toBeInTheDocument()
    }
  })

  it('displays y-level text for each ore peak', () => {
    render(<OreDepths />)
    expect(screen.getByText(/Coal \(peak Y=96\)/)).toBeInTheDocument()
    expect(screen.getByText(/Diamond \(peak Y=-59\)/)).toBeInTheDocument()
  })

  it('renders the diamond zone label', () => {
    render(<OreDepths />)
    expect(screen.getByText('DIAMOND ZONE')).toBeInTheDocument()
  })

  it('renders y-axis labels', () => {
    render(<OreDepths />)
    expect(screen.getByText('Y=0')).toBeInTheDocument()
    expect(screen.getByText('Y=-64')).toBeInTheDocument()
    expect(screen.getByText('Y=256')).toBeInTheDocument()
  })
})
