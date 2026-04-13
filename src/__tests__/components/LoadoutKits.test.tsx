import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LoadoutKits } from '../../components/LoadoutKits'

describe('LoadoutKits', () => {
  it('renders 4 kit cards', () => {
    render(<LoadoutKits />)
    expect(screen.getByText('Mining Expedition')).toBeInTheDocument()
    expect(screen.getByText('Surface Exploration')).toBeInTheDocument()
    expect(screen.getByText('Nether Run')).toBeInTheDocument()
    expect(screen.getByText('Roadside Chest (stock)')).toBeInTheDocument()
  })

  it('renders correct item count for Mining Expedition', () => {
    render(<LoadoutKits />)
    expect(screen.getByText('Iron/Diamond Pickaxe')).toBeInTheDocument()
    expect(screen.getByText('2-3')).toBeInTheDocument()
  })

  it('renders correct item count for Roadside Chest', () => {
    render(<LoadoutKits />)
    const coalItems = screen.getAllByText('Coal')
    expect(coalItems.length).toBeGreaterThanOrEqual(1)
  })
})
