import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../../App'


describe('App', () => {
  it('renders with Ore Depths as the default tab', () => {
    render(<App />)
    expect(screen.getByText('Ore Distribution by Y-Level')).toBeInTheDocument()
  })

  it('switches to Recipes tab when clicked', async () => {
    render(<App />)
    await userEvent.click(screen.getByText('Recipes'))
    expect(screen.getByText(/Phase 4/)).toBeInTheDocument()
  })

  it('switches to World Tracker tab when clicked', async () => {
    render(<App />)
    await userEvent.click(screen.getByText('World Tracker'))
    expect(screen.getByText(/Phase 6/)).toBeInTheDocument()
  })

  it('shows only one page at a time', async () => {
    render(<App />)
    expect(screen.getByText('Ore Distribution by Y-Level')).toBeInTheDocument()
    expect(screen.queryByText(/Phase 4/)).not.toBeInTheDocument()

    await userEvent.click(screen.getByText('Recipes'))
    expect(screen.queryByText('Ore Distribution by Y-Level')).not.toBeInTheDocument()
    expect(screen.getByText(/Phase 4/)).toBeInTheDocument()
  })
})
