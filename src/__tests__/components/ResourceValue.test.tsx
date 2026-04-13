import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ResourceValue } from '../../components/ResourceValue'

describe('ResourceValue', () => {
  it('renders all 13 resource items', () => {
    render(<ResourceValue />)
    const resourceNames = [
      'Water Bucket', 'Diamond', 'Iron', 'Obsidian', 'Netherite',
      'Wood', 'Food (Potato)', 'Coal/Charcoal', 'Redstone',
      'Emerald', 'Lapis', 'Gold', 'Copper',
    ]
    for (const name of resourceNames) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('shows score for each resource', () => {
    render(<ResourceValue />)
    expect(screen.getAllByText('10/10')).toHaveLength(2)
    expect(screen.getByText('3/10')).toBeInTheDocument()
  })

  it('expands note on click and collapses on second click', async () => {
    render(<ResourceValue />)
    const waterBucket = screen.getByText('Water Bucket').closest('[role="button"]')!

    await userEvent.click(waterBucket)
    expect(screen.getByText(/Saves your life from lava/)).toBeInTheDocument()

    await userEvent.click(waterBucket)
    expect(screen.queryByText(/Saves your life from lava/)).not.toBeInTheDocument()
  })

  it('renders the stacking reference table', () => {
    render(<ResourceValue />)
    expect(screen.getByText('Stacking Reference')).toBeInTheDocument()
    expect(screen.getByText('Ender Pearls')).toBeInTheDocument()
    expect(screen.getByText('Boats / Minecarts')).toBeInTheDocument()
  })
})
