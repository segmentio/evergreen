import React, { memo, forwardRef } from 'react'
import humanize from 'humanize-plus'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { IconButton } from '../../buttons'
import { useStyleConfig } from '../../hooks'
import { InfoSignIcon, TrashIcon } from '../../icons'
import { Image } from '../../image'
import { Card } from '../../layers'
import hasValue from '../../lib/has-value'
import isFunction from '../../lib/is-function'
import { majorScale } from '../../scales'
import { Spinner } from '../../spinner'
import { useTheme } from '../../theme'
import { Paragraph } from '../../typography'
import getIconFromType from './utils/get-icon-from-type'
import isImage from './utils/is-image'

const imageSize = majorScale(5)
const styleModifiers = {}
const pseudoSelectors = {
  _invalid: `&[aria-invalid='true']`
}
const internalStyles = {}

const FileCard = memo(
  forwardRef((props, ref) => {
    const {
      description,
      disabled = false,
      isInvalid = false,
      isLoading = false,
      name,
      onRemove,
      sizeInBytes,
      src,
      type,
      validationMessage,
      ...rest
    } = props

    const { colors } = useTheme()
    const themedProps = useStyleConfig('FileCard', styleModifiers, pseudoSelectors, internalStyles)

    const FileTypeIcon = getIconFromType(type)
    const renderImage = hasValue(src) && isImage(type)
    const renderInvalidIcon = !isLoading && isInvalid
    const renderDefaultIcon = !isLoading && !isInvalid

    return (
      <Box ref={ref} display="flex" flexDirection="column" marginBottom={isInvalid ? majorScale(1) : majorScale(2)}>
        <Box aria-invalid={isInvalid} {...themedProps} {...rest}>
          <Box alignItems="center" display="flex" flexDirection="row" width="100%">
            <Box marginLeft={majorScale(2)} marginRight={majorScale(1)}>
              {renderImage ? (
                <Image height={imageSize} src={src} width={imageSize} />
              ) : (
                <Card
                  alignItems="center"
                  backgroundColor={isInvalid || isLoading ? undefined : colors.gray90}
                  display="flex"
                  height={majorScale(5)}
                  justifyContent="center"
                  width={majorScale(5)}
                >
                  {isLoading && <Spinner size={majorScale(2)} />}
                  {renderInvalidIcon && <InfoSignIcon color={colors.red500} size={majorScale(2)} />}
                  {renderDefaultIcon && <FileTypeIcon color={colors.gray600} size={majorScale(2)} />}
                </Card>
              )}
            </Box>
            <Box display="flex" flexDirection="column" overflow="hidden">
              <Paragraph color={colors.gray800} whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
                {name}
              </Paragraph>
              <Paragraph color={colors.gray700} size={300}>
                {hasValue(description) ? description : humanize.fileSize(sizeInBytes, 0)}
              </Paragraph>
            </Box>
            {isFunction(onRemove) && (
              <IconButton
                appearance="minimal"
                disabled={disabled || isLoading}
                icon={TrashIcon}
                onClick={onRemove}
                marginLeft="auto"
                marginRight={majorScale(2)}
                type="button"
              />
            )}
          </Box>
        </Box>
        {hasValue(validationMessage) && (
          <Paragraph color={colors.red500} size="small">
            {validationMessage}
          </Paragraph>
        )}
      </Box>
    )
  })
)

FileCard.propTypes = {
  /**
   * Description to display under the file name. If not provided, defaults to the file size
   */
  description: PropTypes.string,
  /**
   * Disables the button to remove the file
   */
  disabled: PropTypes.bool,
  /**
   * When true, displays the card in an error state
   */
  isInvalid: PropTypes.bool,
  /**
   * Sets a loading state on the card. If the remove button is rendered, it will be disabled
   */
  isLoading: PropTypes.bool,
  /**
   * Name of the file to display
   */
  name: PropTypes.string,
  /**
   * Callback to be fired when the remove button is clicked. If not provided, the button will not
   * render
   */
  onRemove: PropTypes.func,
  /**
   * Size of the file
   */
  sizeInBytes: PropTypes.number,
  /**
   * Url of the uploaded image
   */
  src: PropTypes.string,
  /**
   * MimeType of the file to display, which controls what type of icon is rendered
   */
  type: PropTypes.string,
  /**
   * Message to display underneath the card
   */
  validationMessage: PropTypes.string
}

export default FileCard
