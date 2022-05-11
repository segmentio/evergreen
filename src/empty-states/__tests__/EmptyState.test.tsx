import React from 'react'
import { render } from '@testing-library/react'
import { LockIcon } from '../../icons'
import { defaultTheme } from '../../themes'
import { Text } from '../../typography/index'
import EmptyState from '../src/EmptyState'

describe('Empty States', () => {
  it('does not crash when rendering', () => {
    expect(() =>
      render(
        <EmptyState
          title="My Empty States"
          icon={<LockIcon color={defaultTheme.colors.gray500} />}
          iconBgColor={defaultTheme.colors.gray200}
        />
      )
    ).not.toThrowError()
  })

  it('should render title', () => {
    const { getByText } = render(
      <EmptyState
        title="My Empty States"
        icon={<LockIcon color={defaultTheme.colors.gray500} />}
        iconBgColor={defaultTheme.colors.gray200}
      />
    )
    expect(getByText('My Empty States')).toBeVisible()
  })

  it('should render icon', () => {
    const { container } = render(
      <EmptyState
        title="My Empty States"
        icon={<LockIcon color={defaultTheme.colors.gray500} />}
        iconBgColor={defaultTheme.colors.gray200}
      />
    )

    expect(container.querySelector('svg')).toHaveAttribute('data-icon', 'lock')
  })

  it('should render description when passed in', () => {
    const { getByText } = render(
      <EmptyState
        title="My Empty States"
        icon={<LockIcon color={defaultTheme.colors.gray500} />}
        iconBgColor={defaultTheme.colors.gray200}
        description="Some description"
      />
    )
    expect(getByText('Some description')).toBeVisible()
  })

  it('should render react component when react component is passed as a description prop', () => {
    const { getByText } = render(
      <EmptyState
        title="My Empty States"
        icon={<LockIcon color={defaultTheme.colors.gray500} />}
        iconBgColor={defaultTheme.colors.gray200}
        description={<Text>Example Text</Text>}
      />
    )
    expect(getByText('Example Text')).toBeVisible()
  })

  it('should render primary button when passed in', () => {
    const { getByRole } = render(
      <EmptyState
        title="My Empty States"
        icon={<LockIcon color={defaultTheme.colors.gray500} />}
        iconBgColor={defaultTheme.colors.gray200}
        primaryCta={<EmptyState.PrimaryButton>Primary Action</EmptyState.PrimaryButton>}
      />
    )
    expect(getByRole('button', { name: 'Primary Action' })).toBeVisible()
  })

  it('should render link button when passed in', () => {
    const { getByRole } = render(
      <EmptyState
        title="My Empty States"
        icon={<LockIcon color={defaultTheme.colors.gray500} />}
        iconBgColor={defaultTheme.colors.gray200}
        anchorCta={
          <EmptyState.LinkButton href="https://segment.com/docs/" target="_blank">
            Link to Documentation
          </EmptyState.LinkButton>
        }
      />
    )
    expect(getByRole('link')).toBeVisible()
  })
})
