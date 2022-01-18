import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../buttons'
import { HandUpIcon } from '../../icons'
import { Pane } from '../../layers'
import { Popover } from '../../popover'
import { majorScale } from '../../scales'
import { useTheme } from '../../theme'
import EmptyState from '../src/EmptyState'

const SmallMinimalExample = props => {
  const { colors } = useTheme()

  return (
    <Pane marginBottom={majorScale(50)}>
      <Popover
        {...props.popoverProps}
        content={
          <Pane width={300} height="auto">
            <EmptyState
              background="light"
              title="No source selected"
              orientation="vertical"
              icon={<HandUpIcon color={colors.gray500} />}
              iconBgColor={colors.gray300}
            />
          </Pane>
        }
      >
        <Button>Trigger Popover</Button>
      </Popover>
    </Pane>
  )
}

SmallMinimalExample.propTypes = {
  popoverProps: PropTypes.any
}

export default SmallMinimalExample
