import React from 'react'
import { render } from '@testing-library/react'
import { LockIcon } from '../../icons'
import { defaultTheme } from '../../themes'
import SmallExample from '../fixtures/SmallExample'
import SmallMinimalExample from '../fixtures/SmallMinimalExample'
import EmptyState from '../src/EmptyState'

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Empty States', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('does not crash when rendering', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() =>
      render(
        <EmptyState
          // @ts-expect-error ts-migrate(2322) FIXME: Type '{ title: string; icon: Element; iconBgColor:... Remove this comment to see the full error message
          title="My Empty States"
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          icon={<LockIcon color={defaultTheme.tokens.colors.gray500} />}
          iconBgColor={defaultTheme.tokens.colors.gray200}
        />
      )
    ).not.toThrowError()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render an icon and a title', () => {
    const { getByText } = render(
      <EmptyState
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ title: string; icon: Element; iconBgColor:... Remove this comment to see the full error message
        title="My Empty States"
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
        icon={<LockIcon color={defaultTheme.tokens.colors.gray500} />}
        iconBgColor={defaultTheme.tokens.colors.gray200}
      />
    )
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByText('My Empty States')).toBeVisible()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render decription when passed in', () => {
    const { getByText } = render(
      <EmptyState
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ title: string; icon: Element; iconBgColor:... Remove this comment to see the full error message
        title="My Empty States"
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
        icon={<LockIcon color={defaultTheme.tokens.colors.gray500} />}
        iconBgColor={defaultTheme.tokens.colors.gray200}
        description="Some description"
      />
    )
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByText('Some description')).toBeVisible()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render primary button when passed in', () => {
    const { getByRole } = render(
      <EmptyState
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ title: string; icon: Element; iconBgColor:... Remove this comment to see the full error message
        title="My Empty States"
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
        icon={<LockIcon color={defaultTheme.tokens.colors.gray500} />}
        iconBgColor={defaultTheme.tokens.colors.gray200}
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'PrimaryButton' does not exist on type 'N... Remove this comment to see the full error message
        primaryCta={<EmptyState.PrimaryButton>Primary Action</EmptyState.PrimaryButton>}
      />
    )
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByRole('button', { name: 'Primary Action' })).toBeVisible()
  })

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render link button when passed in', () => {
    const { getByRole } = render(
      <EmptyState
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ title: string; icon: Element; iconBgColor:... Remove this comment to see the full error message
        title="My Empty States"
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
        icon={<LockIcon color={defaultTheme.tokens.colors.gray500} />}
        iconBgColor={defaultTheme.tokens.colors.gray200}
        anchorCta={
          // @ts-expect-error ts-migrate(2339) FIXME: Property 'LinkButton' does not exist on type 'Name... Remove this comment to see the full error message
          <EmptyState.LinkButton href="https://segment.com/docs/" target="_blank">
            Link to Documentation
          // @ts-expect-error ts-migrate(2339) FIXME: Property 'LinkButton' does not exist on type 'Name... Remove this comment to see the full error message
          </EmptyState.LinkButton>
        }
      />
    )
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByRole('link')).toBeVisible()
  })

  // Small Minimal Example with just icon and title
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render icon and title in minimal popup', () => {
    const { getByTestId } = render(
      <SmallMinimalExample
        popoverProps={{ isShown: true, statelessProps: { 'data-testid': 'empty-state-container' } }}
      />
    )
    const container = getByTestId('empty-state-container')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(container.querySelector('svg')).toBeVisible()
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(container.querySelector('svg')).toHaveAttribute('data-icon', 'hand-up')
  })

  // Small Example
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should render icon, title, description, CTA in popup', () => {
    const { getAllByText, getByRole, getByTestId } = render(
      <SmallExample popoverProps={{ isShown: true, statelessProps: { 'data-testid': 'empty-state-container' } }} />
    )
    const container = getByTestId('empty-state-container')
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getAllByText('You need permission to access these sources')).toHaveLength(1)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      getAllByText(
        'If you believe you should have accesss to this page, please check with your Workspace Owner or request access below.'
      )
    ).toHaveLength(1)
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getByRole('button', { name: 'Request Access' })).toBeVisible()
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(container.querySelector('svg')).toBeVisible()
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(container.querySelector('svg')).toHaveAttribute('data-icon', 'lock')
  })
})
