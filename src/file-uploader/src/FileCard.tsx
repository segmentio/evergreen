import React, { memo, forwardRef } from 'react'
import humanize from 'humanize-plus'
import Box, { PolymorphicBoxProps } from 'ui-box'
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

export interface FileCardOwnProps {
  /**
   * Description to display under the file name. If not provided, defaults to the file size
   */
  description?: string
  /**
   * Disables the button to remove the file.
   */
  disabled?: boolean
  /**
   * When true, displays the card in an error state
   */
  isInvalid?: boolean
  /**
   * Sets a loading state on the card. If the remove button is rendered, it will be disabled.
   */
  isLoading?: boolean
  /**
   * Name of the file to display
   */
  name?: string
  /**
   * Callback to be fired when the remove button is clicked. If not provided, the button will not
   * render
   */
  onRemove?: () => void
  /**
   * Size of the file
   */
  sizeInBytes?: number
  /**
   * Url of the uploaded image
   */
  src?: string
  /**
   * MimeType of the file to display, which controls what type of icon is rendered
   */
  type?: string
  /**
   * Message to display underneath the card
   */
  validationMessage?: string
}

export type FileCardProps = PolymorphicBoxProps<'div', FileCardOwnProps>

const imageSize = majorScale(5)
const styleModifiers = {}
const pseudoSelectors = {
  _invalid: `&[aria-invalid='true']`,
}
const internalStyles = {}

const FileCard: React.FC<FileCardProps> = memo(
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
    const { className, ...boxProps } = useStyleConfig('FileCard', styleModifiers, pseudoSelectors, internalStyles)

    const FileTypeIcon = getIconFromType(type)
    const renderImage = hasValue(src) && isImage(type)
    const renderInvalidIcon = !isLoading && isInvalid
    const renderDefaultIcon = !isLoading && !isInvalid

    return (
      <Box ref={ref} display="flex" flexDirection="column" marginBottom={isInvalid ? majorScale(1) : majorScale(2)}>
        <Box aria-invalid={isInvalid} className={className} {...boxProps} {...rest}>
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
                {hasValue(description) ? description : humanize.fileSize(sizeInBytes ?? 0, 0)}
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

export default FileCard
