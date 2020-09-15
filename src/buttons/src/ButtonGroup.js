import React, { memo } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { useStyleConfig } from '../../hooks'
import Button from './Button'

const pseudoSelectors = {
  _child: '& > *',
  _firstChild: '& > *:first-child',
  _middleChild: '& > *:not(:first-child):not(:last-child)',
  _lastChild: '& > *:last-child'
}

const internalStyles = {
  display: 'inline-block'
}

const ButtonGroup = memo(function ButtonGroup(props) {
  const { appearance, children, className, size, ...restProps } = props

  const { className: themedClassName, ...styleProps } = useStyleConfig(
    'ButtonGroup',
    { appearance, size },
    pseudoSelectors,
    internalStyles
  )

  const enhancedChildren = React.Children.map(children, child => {
    if (!React.isValidElement(child)) {
      return child
    }

    return React.cloneElement(child, {
      appearance,
      size,
      // Prefer more granularly defined props if present
      ...child.props
    })
  })

  return (
    <Box
      className={cx(className, themedClassName)}
      {...styleProps}
      {...restProps}
    >
      {enhancedChildren}
    </Box>
  )
})

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  appearance: Button.propTypes.appearance,
  size: Button.propTypes.size
}

export default ButtonGroup
