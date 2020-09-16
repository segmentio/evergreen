import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import useListBehavior from '../../hooks/use-list-behavior'
import useStyleConfig from '../../hooks/use-style-config'
import { Image } from '../../image'
import { Pane } from '../../layers'
import TextTableCell from '../../table/src/TextTableCell'
import { useTheme } from '../../theme'

const pseudoSelectors = {
  _focus: ':focus',
  _active: '&[aria-current="true"], &[data-isselectable="true"]:active'
}

const internalStyles = {
  display: 'flex',
  alignItems: 'center'
}

const emptyObject = {}

const Option = memo(
  forwardRef(function Option(props, ref) {
    const {
      disabled,
      height,
      icon,
      isHighlighted,
      isSelectable,
      isSelected,
      label,
      onDeselect,
      onSelect,
      style,
      ...rest
    } = props

    const { tokens } = useTheme()

    const disableProps = { color: 'muted' }
    const selectedProps = { color: tokens.selectedOptionColor }
    const emptyProps = {}

    let textProps = emptyProps
    if (disabled) {
      textProps = disableProps
    }

    if (isSelected) {
      textProps = selectedProps
    }

    const { className: themedClassName, ...boxProps } = useStyleConfig(
      'Option',
      emptyObject,
      pseudoSelectors,
      internalStyles
    )

    const { getRef, ...listBehaviorProps } = useListBehavior({
      isSelectable,
      isSelected,
      disabled,
      onSelect
    })

    return (
      <Pane
        style={style}
        className={themedClassName}
        {...boxProps}
        {...listBehaviorProps}
        {...rest}
        ref={getRef}
      >
        <TextTableCell
          height={height}
          textProps={textProps}
          paddingX={16}
          borderRight={null}
          flex={1}
          alignSelf="stretch"
          cursor={disabled ? 'default' : 'pointer'}
        >
          <Pane alignItems="center" display="flex">
            {icon && <Image src={icon} width={24} marginRight={8} />}
            {label}
          </Pane>
        </TextTableCell>
      </Pane>
    )
  })
)

Option.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  style: PropTypes.any,
  height: PropTypes.number,
  onSelect: PropTypes.func,
  onDeselect: PropTypes.func,
  isHighlighted: PropTypes.bool,
  isSelected: PropTypes.bool,
  isSelectable: PropTypes.bool,
  disabled: PropTypes.bool
}

export default Option
