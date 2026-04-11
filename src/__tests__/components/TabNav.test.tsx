import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TabNav, type TabId } from '../../components/TabNav'


describe('TabNav', () => {
  it('renders 6 tab buttons', () => {
    render(<TabNav activeTab="depth" onTabChange={() => {}} />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(6)
  })

  it('renders all tab labels', () => {
    render(<TabNav activeTab="depth" onTabChange={() => {}} />)
    expect(screen.getByText('Ore Depths')).toBeInTheDocument()
    expect(screen.getByText('Resource Value')).toBeInTheDocument()
    expect(screen.getByText('Recipes')).toBeInTheDocument()
    expect(screen.getByText('Progression')).toBeInTheDocument()
    expect(screen.getByText('Loadout Kits')).toBeInTheDocument()
    expect(screen.getByText('World Tracker')).toBeInTheDocument()
  })

  it('marks the active tab with the active class', () => {
    render(<TabNav activeTab="recipes" onTabChange={() => {}} />)
    const recipesButton = screen.getByText('Recipes')
    expect(recipesButton.className).toContain('active')
  })

  it('calls onTabChange when a button is clicked', async () => {
    const handleChange = vi.fn()
    render(<TabNav activeTab="depth" onTabChange={handleChange} />)

    await userEvent.click(screen.getByText('Recipes'))
    expect(handleChange).toHaveBeenCalledWith('recipes' as TabId)
  })
})
