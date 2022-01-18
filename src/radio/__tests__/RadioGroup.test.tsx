import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import RadioGroup from '../src/RadioGroup'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Radio Group', () => {
  const options = [
    { label: 'Read-only', value: 'read-only' },
    { label: 'Write', value: 'write', isDisabled: true },
    { label: 'Restricted', value: 'restricted' }
  ]

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should not crash when rendering', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => {
      // @ts-expect-error ts-migrate(2322) FIXME: Type '({ label: string; value: string; isDisabled?... Remove this comment to see the full error message
      render(<RadioGroup options={options} />)
    }).not.toThrowError()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render the radio options with the options specified', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type '({ label: string; value: string; isDisabled?... Remove this comment to see the full error message
    render(<RadioGroup options={options} />)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByRole('group')).toBeVisible()
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getAllByRole('radio')).toHaveLength(3)
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should show group label when label is specified', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type '({ label: string; value: string; isDisabled?... Remove this comment to see the full error message
    render(<RadioGroup options={options} label="Permissions" />)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByRole('group').getAttribute('aria-label')).toEqual('Permissions')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByLabelText('Permissions')).toBeVisible()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should have all options in required states when isRequired is true', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type '({ label: string; value: string; isDisabled?... Remove this comment to see the full error message
    render(<RadioGroup options={options} isRequired />)
    screen.getAllByRole('radio').forEach(element => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(element).toBeRequired()
    })
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should select the option that has the same value specified', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type '({ label: string; value: string; isDisabled?... Remove this comment to see the full error message
    render(<RadioGroup options={options} value="write" />)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(screen.getByRole('radio', { name: 'Write' })).toBeChecked()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should handle state change when onChange is specified', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    const onChangeMock = jest.fn()
    // @ts-expect-error ts-migrate(2322) FIXME: Type '({ label: string; value: string; isDisabled?... Remove this comment to see the full error message
    render(<RadioGroup options={options} value="read-only" onChange={onChangeMock} />)

    const radio = screen.getByRole('radio', { name: 'Restricted' })
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(onChangeMock).toBeCalledTimes(0)
    fireEvent.click(radio)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(onChangeMock).toBeCalledTimes(1)
  })

  // untested props: defaultValue, size
})
