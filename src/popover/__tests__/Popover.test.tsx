import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PopoverWithTextInputFixture from '../fixtures/PopoverWithTextInputChild'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Popover', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Should not be dismissed when clicking on a child within the popover', async () => {
    const { findByTestId } = render(<PopoverWithTextInputFixture />)
    const trigger = await findByTestId('popover-trigger')
    userEvent.click(trigger)

    const container = await findByTestId('popover-container')
    const input = await findByTestId('popover-input')

    // Simulate a user click event on the immediate child node
    userEvent.click(container)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(container).toBeVisible()

    // Click on a child node a level deeper
    userEvent.click(input)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(container).toBeVisible()
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(input).toBeVisible()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Should render its content body to the DOM if `isShown` is set to `true`', async () => {
    const { findByTestId } = render(<PopoverWithTextInputFixture isShown={true} />)
    const container = await findByTestId('popover-container')

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(container).toBeVisible()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Should properly report back the event, if the popover body is clicked', async () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    const mockBodyClick = jest.fn()
    render(<PopoverWithTextInputFixture isShown={true} onBodyClick={mockBodyClick} />)

    userEvent.click(document.body)

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(mockBodyClick).toHaveBeenCalledTimes(1)
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Should remain open if a user clicks somewhere outside of the popover area and `shouldCloseOnExternalClick` is `false`', async () => {
    const { findByTestId } = render(<PopoverWithTextInputFixture isShown shouldCloseOnExternalClick={false} />)
    const container = await findByTestId('popover-container')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(container).toBeVisible()
    userEvent.click(document.body)

    // Container should still be after document body was clicked
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(container).toBeVisible()
  })
})
