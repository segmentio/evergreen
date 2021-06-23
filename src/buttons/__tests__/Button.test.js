import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import renderer from 'react-test-renderer'
import { LockIcon } from '../../icons/generated/LockIcon'
import { ThemeProvider } from '../../theme'
import { classicTheme, defaultTheme } from '../../themes'
import Button from '../src/Button'
import IconButton from '../src/IconButton'

describe.each([
  ['default', defaultTheme],
  ['classic', classicTheme]
])('<Button /> % %s', (_, theme) => {
  it('snapshots with the rendered output', () => {
    const component = (
      <ThemeProvider value={theme}>
        <Button />
      </ThemeProvider>
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

function makeButtonFixture(props = {}) {
  return (
    <Button data-testid="button" {...props}>
      Test
    </Button>
  )
}

function makeIconButtonFixture(props = {}) {
  return <IconButton data-testid="button" {...props} />
}

describe('Button', () => {
  it('renders children without crashing', () => {
    expect(() => render(makeButtonFixture())).not.toThrow()
  })
  it('accepts an `onClick` handler that gets called upon clicking', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(makeButtonFixture({ onClick }))
    const container = getByTestId('button')

    userEvent.click(container)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
  it('has a `disabled` prop that disables the button', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(makeButtonFixture({ onClick, disabled: true }))
    const container = getByTestId('button')

    expect(() => userEvent.click(container)).toThrowError()
    expect(onClick).toHaveBeenCalledTimes(0)
  })
  it('has a `isLoading` prop that renders a spinner and disables the button', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(makeButtonFixture({ onClick, isLoading: true }))
    const container = getByTestId('button')

    expect(() => userEvent.click(container)).toThrowError()
    expect(container.querySelector('svg')).toBeInTheDocument()
    expect(onClick).toHaveBeenCalledTimes(0)
  })
  it('renders an icon in either the `iconBefore` props', () => {
    const { getByTestId } = render(makeButtonFixture({ iconBefore: LockIcon }))
    const container = getByTestId('button')

    expect(container.querySelector('svg')).toHaveAttribute('data-icon', 'lock')
  })
  it('renders an icon in either the `iconAfter` props', () => {
    const { getByTestId } = render(makeButtonFixture({ iconAfter: LockIcon }))
    const container = getByTestId('button')

    expect(container.querySelector('svg')).toHaveAttribute('data-icon', 'lock')
  })
  it('properly handles keyboard events to simulate clicks', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(makeButtonFixture({ onClick, iconAfter: LockIcon }))
    const container = getByTestId('button')

    container.focus()
    expect(document.activeElement).toEqual(container)
    userEvent.keyboard('{enter}')
    expect(onClick).toHaveBeenCalledTimes(1)
    userEvent.keyboard('{space}')
    expect(onClick).toHaveBeenCalledTimes(2)
  })
})

describe('IconButton', () => {
  it('Passes through an icon when passes as a component reference', () => {
    const { getByTestId } = render(makeIconButtonFixture({ icon: LockIcon }))
    const container = getByTestId('button')
    expect(container.querySelector('svg')).toHaveAttribute('data-icon', 'lock')
  })
  it('Passes through an instantiated component as `icon`', () => {
    const { getByTestId } = render(makeIconButtonFixture({ icon: <LockIcon size={24} /> }))
    const container = getByTestId('button')
    const svg = container.querySelector('svg')
    expect(window.getComputedStyle(svg).width).toEqual('24px')
    expect(window.getComputedStyle(svg).height).toEqual('24px')
  })
})
