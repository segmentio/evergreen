import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PopoverWithTextInputFixture from '../fixtures/PopoverWithTextInputChild'

describe('Popover', () => {
  it('Should not be dismissed when clicking on a child within the popover', async () => {
    const onBodyClick = jest.fn()
    const { findByTestId } = render(<PopoverWithTextInputFixture onBodyClick={onBodyClick} />)
    const trigger = await findByTestId('popover-trigger')
    userEvent.click(trigger)

    const container = await findByTestId('popover-container')

    userEvent.click(container)
    expect(container).toBeVisible()
  })
})
