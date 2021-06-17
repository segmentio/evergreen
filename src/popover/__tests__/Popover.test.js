import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PopoverWithTextInputFixture from '../fixtures/PopoverWithTextInputChild'

describe('Popover', () => {
  it('Should not be dismissed when clicking on a child within the popover', async () => {
    const { findByTestId } = render(<PopoverWithTextInputFixture />)
    const trigger = await findByTestId('popover-trigger')
    userEvent.click(trigger)

    const container = await findByTestId('popover-container')
    const input = await findByTestId('popover-input')

    // Simulate a user click event on the immediate child node
    userEvent.click(container)
    expect(container).toBeVisible()

    // Click on a child node a level deeper
    userEvent.click(input)
    expect(container).toBeVisible()
    expect(input).toBeVisible()
  })

  it('Should render its content body to the DOM if `isShown` is set to `true`', async () => {
    const { findByTestId } = render(<PopoverWithTextInputFixture isShown={true} />)
    const container = await findByTestId('popover-container')

    expect(container).toBeVisible()
  })

  it('Should properly report back the event, if the popover body is clicked', async () => {
    const mockBodyClick = jest.fn()
    render(<PopoverWithTextInputFixture isShown={true} onBodyClick={mockBodyClick} />)

    userEvent.click(document.body)

    expect(mockBodyClick).toHaveBeenCalledTimes(1)
  })

  it('Should remain open if a user clicks somewhere outside of the popover area and `shouldCloseOnExternalClick` is `false`', async () => {
    const { findByTestId } = render(<PopoverWithTextInputFixture isShown shouldCloseOnExternalClick={false} />)
    const container = await findByTestId('popover-container')
    expect(container).toBeVisible()
    userEvent.click(document.body)

    // Container should still be after document body was clicked
    expect(container).toBeVisible()
  })
})
