import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../buttons'
import { HandUpIcon } from '../../icons'
import { Pane } from '../../layers'
import { Popover } from '../../popover'
import { majorScale } from '../../scales'
import { useTheme } from '../../theme'
import EmptyState from '../src/EmptyState'

const SmallMinimalExample = (props: any) => {
  const { colors } = useTheme()

  return (
    // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
    <Pane marginBottom={majorScale(50)}>
      <Popover
        {...props.popoverProps}
        content={
          // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
          <Pane width={300} height="auto">
            <EmptyState
              background="light"
              title="No source selected"
              orientation="vertical"
              // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
              icon={<HandUpIcon color={colors.gray500} />}
              iconBgColor={colors.gray300}
            />
          </Pane>
        }
      >
        // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
        // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
        <Button>Trigger Popover</Button>
      </Popover>
    </Pane>
  )
}

SmallMinimalExample.propTypes = {
  popoverProps: PropTypes.any
}

export default SmallMinimalExample
