import React, { memo } from 'react'
import PropTypes from 'prop-types'
import isFunction from '../../lib/is-function'
import { majorScale } from '../../scales'
import { useTheme } from '../../theme'
import { Text, Paragraph } from '../../typography'

const internalStyles = {
  marginTop: majorScale(3),
  pointerEvents: 'none'
}

const BrowseOrDragText = props => {
  const { browseOrDragText: getBrowseOrDragText, disabled, maxFiles } = props
  const defaultOrDragCopy = `or drag ${maxFiles === 1 ? 'a file' : 'files'} here`
  const { colors } = useTheme()
  const ctaTextColor = disabled ? colors.gray500 : colors.blue400

  if (!isFunction(getBrowseOrDragText)) {
    return (
      <Paragraph {...internalStyles}>
        <Text color={ctaTextColor}>Browse </Text>
        <Text color={disabled ? colors.gray500 : colors.gray700}>{defaultOrDragCopy}</Text>
      </Paragraph>
    )
  }

  const browseOrDragText = getBrowseOrDragText(maxFiles)

  if (typeof browseOrDragText === 'string') {
    return (
      <Paragraph {...internalStyles}>
        <Text color={ctaTextColor}>{browseOrDragText}</Text>
      </Paragraph>
    )
  }

  return browseOrDragText
}

BrowseOrDragText.propTypes = {
  /**
   * Function to return a string or component for the 'Browse or drag' text
   * @type {(maxFiles: number) => React.ReactNode}
   */
  browseOrDragText: PropTypes.func,
  /**
   * Renders the text in a muted color
   */
  disabled: PropTypes.bool,
  /**
   * Maximum number of files to accept
   */
  maxFiles: PropTypes.number
}

export default memo(BrowseOrDragText)
