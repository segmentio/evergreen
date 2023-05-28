import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { mockRef } from '../../test/utils'
import { Tooltip } from '../../tooltip'
import { Pulsar } from '../src/Pulsar'

const makePulsarFixture = (props = {}) => <Pulsar data-testid="Pulsar" {...props} />

describe('Pulsar', () => {
  it('should forward ref', () => {
    const ref = mockRef()

    render(makePulsarFixture({ ref }))

    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('should forward box props', () => {
    const backgroundColor = 'red'

    render(makePulsarFixture({ backgroundColor }))

    expect(screen.getByTestId('Pulsar')).toHaveStyle({ backgroundColor })
  })

  it('should render Tooltip when wrapped and hovered', () => {
    render(<Tooltip content="Hello world">{makePulsarFixture()}</Tooltip>)

    userEvent.hover(screen.getByTestId('Pulsar'))

    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })
})
