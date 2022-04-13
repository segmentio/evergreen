import React from 'react'
import { render } from '@testing-library/react'
import { LockIcon } from '../../icons'
import { defaultTheme } from '../../themes'
import SmallExample from '../fixtures/SmallExample'
import SmallMinimalExample from '../fixtures/SmallMinimalExample'
import EmptyState from '../src/EmptyState'

describe('Empty States', () => {
  it('does not crash when rendering', () => {
    expect(() =>
      render(
        <EmptyState
          title="My Empty States"
          icon={<LockIcon color={defaultTheme.tokens.colors.gray500} />}
          iconBgColor={defaultTheme.tokens.colors.gray200}
        />
      )
    ).not.toThrowError()
  })

  it('should render an icon and a title', () => {
    const { getByText } = render(
      <EmptyState
        title="My Empty States"
        icon={<LockIcon color={defaultTheme.tokens.colors.gray500} />}
        iconBgColor={defaultTheme.tokens.colors.gray200}
      />
    )
    expect(getByText('My Empty States')).toBeVisible()
  })

  it('should render decription when passed in', () => {
    const { getByText } = render(
      <EmptyState
        title="My Empty States"
        icon={<LockIcon color={defaultTheme.tokens.colors.gray500} />}
        iconBgColor={defaultTheme.tokens.colors.gray200}
        description="Some description"
      />
    )
    expect(getByText('Some description')).toBeVisible()
  })

  it('should render primary button when passed in', () => {
    const { getByRole } = render(
      <EmptyState
        title="My Empty States"
        icon={<LockIcon color={defaultTheme.tokens.colors.gray500} />}
        iconBgColor={defaultTheme.tokens.colors.gray200}
        primaryCta={<EmptyState.PrimaryButton>Primary Action</EmptyState.PrimaryButton>}
      />
    )
    expect(getByRole('button', { name: 'Primary Action' })).toBeVisible()
  })

  it('should render link button when passed in', () => {
    const { getByRole } = render(
      <EmptyState
        title="My Empty States"
        icon={<LockIcon color={defaultTheme.tokens.colors.gray500} />}
        iconBgColor={defaultTheme.tokens.colors.gray200}
        anchorCta={
          <EmptyState.LinkButton href="https://segment.com/docs/" target="_blank">
            Link to Documentation
          </EmptyState.LinkButton>
        }
      />
    )
    expect(getByRole('link')).toBeVisible()
  })

  // Small Minimal Example with just icon and title
  it('should render icon and title in minimal popup', () => {
    const { getByTestId } = render(
      <SmallMinimalExample
        popoverProps={{ isShown: true, statelessProps: { 'data-testid': 'empty-state-container' } }}
      />
    )
    const container = getByTestId('empty-state-container')
    expect(container.querySelector('svg')).toBeVisible()
    expect(container.querySelector('svg')).toHaveAttribute('data-icon', 'hand-up')
  })

  // Small Example
  it('should render icon, title, description, CTA in popup', () => {
    const { getAllByText, getByRole, getByTestId } = render(
      <SmallExample popoverProps={{ isShown: true, statelessProps: { 'data-testid': 'empty-state-container' } }} />
    )
    const container = getByTestId('empty-state-container')
    expect(getAllByText('You need permission to access these sources')).toHaveLength(1)
    expect(
      getAllByText(
        'If you believe you should have accesss to this page, please check with your Workspace Owner or request access below.'
      )
    ).toHaveLength(1)
    expect(getByRole('button', { name: 'Request Access' })).toBeVisible()
    expect(container.querySelector('svg')).toBeVisible()
    expect(container.querySelector('svg')).toHaveAttribute('data-icon', 'lock')
  })
})
