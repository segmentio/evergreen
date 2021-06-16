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
          image={<LockIcon color={defaultTheme.tokens.colors.gray500} />}
          imageBgColor={defaultTheme.tokens.colors.gray200}
        />
      )
    ).not.toThrowError()
  })

  it('should render an image and a title', () => {
    const { getByText } = render(
      <EmptyState
        title="My Empty States"
        image={<LockIcon color={defaultTheme.tokens.colors.gray500} />}
        imageBgColor={defaultTheme.tokens.colors.gray200}
      />
    )
    expect(getByText('My Empty States')).toBeInTheDocument()
  })

  it('should render decription when passed in', () => {
    const { getByText } = render(
      <EmptyState
        title="My Empty States"
        image={<LockIcon color={defaultTheme.tokens.colors.gray500} />}
        imageBgColor={defaultTheme.tokens.colors.gray200}
        description="Some description"
      />
    )
    expect(getByText('Some description')).toBeInTheDocument()
  })

  it('should render primary button when passed in', () => {
    const { getByRole } = render(
      <EmptyState
        title="My Empty States"
        image={<LockIcon color={defaultTheme.tokens.colors.gray500} />}
        imageBgColor={defaultTheme.tokens.colors.gray200}
        primaryCta={<EmptyState.PrimaryButton>Primary Action</EmptyState.PrimaryButton>}
      />
    )
    expect(getByRole('button', { name: 'Primary Action' })).toBeInTheDocument()
  })

  it('should render secondary button when passed in', () => {
    const { getByRole } = render(
      <EmptyState
        title="My Empty States"
        image={<LockIcon color={defaultTheme.tokens.colors.gray500} />}
        imageBgColor={defaultTheme.tokens.colors.gray200}
        secondaryCta={<EmptyState.SecondaryButton>Secondary Action</EmptyState.SecondaryButton>}
      />
    )
    expect(getByRole('button', { name: 'Secondary Action' })).toBeInTheDocument()
  })

  it('should render link button when passed in', () => {
    const { getByRole } = render(
      <EmptyState
        title="My Empty States"
        image={<LockIcon color={defaultTheme.tokens.colors.gray500} />}
        imageBgColor={defaultTheme.tokens.colors.gray200}
        anchorCta={
          <EmptyState.LinkButton href="https://segment.com/docs/">Link to Documentation</EmptyState.LinkButton>
        }
      />
    )
    expect(getByRole('link')).toBeInTheDocument()
  })

  // Small Minimal Example with just image and title
  // Not sure how to properly test svg
  it('should render image and title in minimal popup', () => {
    const { getByTestId } = render(
      <SmallMinimalExample
        popoverProps={{ isShown: true, statelessProps: { 'data-testid': 'empty-state-container' } }}
      />
    )
    const container = getByTestId('empty-state-container')
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  // Small Example
  it('should render image, title, description, CTA in popup', () => {
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
    expect(getByRole('button', { name: 'Request Access' })).toBeInTheDocument()
    expect(container.querySelector('svg')).toBeInTheDocument()
  })
})
