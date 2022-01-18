import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import renderer from 'react-test-renderer'
import { LockIcon } from '../../icons/generated/LockIcon'
import { ThemeProvider } from '../../theme'
import { classicTheme, defaultTheme } from '../../themes'
import Button from '../src/Button'
import IconButton from '../src/IconButton'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe.each([
  ['default', defaultTheme],
  ['classic', classicTheme]
])('<Button /> % %s', (_: any, theme: any) => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('snapshots with the rendered output', () => {
    const component = (
      <ThemeProvider value={theme}>
        <Button />
      </ThemeProvider>
    )
    const tree = renderer.create(component).toJSON()
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(tree).toMatchSnapshot()
  })
})

function makeButtonFixture(props = {}) {
  return (
    // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
    <Button data-testid="button" {...props}>
      Test
    </Button>
  )
}

function makeIconButtonFixture(props = {}) {
  return <IconButton data-testid="button" {...props} />
}

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Button', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders children without crashing', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => render(makeButtonFixture())).not.toThrow()
  })
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('accepts an `onClick` handler that gets called upon clicking', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    const onClick = jest.fn()
    const { getByTestId } = render(makeButtonFixture({ onClick }))
    const container = getByTestId('button')

    userEvent.click(container)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(onClick).toHaveBeenCalledTimes(1)
  })
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('has a `disabled` prop that disables the button', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    const onClick = jest.fn()
    const { getByTestId } = render(makeButtonFixture({ onClick, disabled: true }))
    const container = getByTestId('button')

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => userEvent.click(container)).toThrowError()
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(onClick).toHaveBeenCalledTimes(0)
  })
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('has a `isLoading` prop that renders a spinner and disables the button', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    const onClick = jest.fn()
    const { getByTestId } = render(makeButtonFixture({ onClick, isLoading: true }))
    const container = getByTestId('button')

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => userEvent.click(container)).toThrowError()
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(container.querySelector('svg')).toBeVisible()
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(onClick).toHaveBeenCalledTimes(0)
  })
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders an icon in either the `iconBefore` props', () => {
    const { getByTestId } = render(makeButtonFixture({ iconBefore: LockIcon }))
    const container = getByTestId('button')

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(container.querySelector('svg')).toHaveAttribute('data-icon', 'lock')
  })
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders an icon in either the `iconAfter` props', () => {
    const { getByTestId } = render(makeButtonFixture({ iconAfter: LockIcon }))
    const container = getByTestId('button')

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(container.querySelector('svg')).toHaveAttribute('data-icon', 'lock')
  })
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('properly handles keyboard events to simulate clicks', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    const onClick = jest.fn()
    const { getByTestId } = render(makeButtonFixture({ onClick, iconAfter: LockIcon }))
    const container = getByTestId('button')

    container.focus()
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(document.activeElement).toEqual(container)
    userEvent.keyboard('{enter}')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(onClick).toHaveBeenCalledTimes(1)
    userEvent.keyboard('{space}')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(onClick).toHaveBeenCalledTimes(2)
  })
})

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('IconButton', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Passes through an icon when passes as a component reference', () => {
    const { getByTestId } = render(makeIconButtonFixture({ icon: LockIcon }))
    const container = getByTestId('button')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(container.querySelector('svg')).toHaveAttribute('data-icon', 'lock')
  })
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('Passes through an instantiated component as `icon`', () => {
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
    const { getByTestId } = render(makeIconButtonFixture({ icon: <LockIcon size={24} /> }))
    const container = getByTestId('button')
    const svg = container.querySelector('svg')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(window.getComputedStyle(svg).width).toEqual('24px')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(window.getComputedStyle(svg).height).toEqual('24px')
  })
})
