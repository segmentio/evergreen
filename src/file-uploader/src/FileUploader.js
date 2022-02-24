import React, { memo, forwardRef, useState, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { FormField } from '../../form-field'
import { UploadIcon } from '../../icons'
import isEmpty from '../../lib/is-empty'
import safeInvoke from '../../lib/safe-invoke'
import { majorScale } from '../../scales'
import { useTheme } from '../../theme'
import { Text, Paragraph } from '../../typography'

const UploaderState = {
  Initial: 'initial',
  Dragging: 'dragging',
  Error: 'error'
}

const FileUploader = memo(
  forwardRef((props, ref) => {
    const {
      acceptedMimeTypes,
      description,
      disabled = false,
      hint,
      label,
      maxFiles,
      maxSizeInBytes,
      onAccepted,
      onChange,
      onRejected,
      onRemove,
      renderFile,
      validationMessage: validationMessageProp,
      values
    } = props

    const { colors } = useTheme()
    const [state, setState] = useState(UploaderState.Initial)
    const [validationMessage, setValidationMessage] = useState('')
    /**
     * The underlying <input type="file" /> DOM element won't accept the same file after it has been
     * picked unless it is rerendered manually - if a user selects and removes a file, they should
     * still be able to pick it again without refreshing the page.
     * https://stackoverflow.com/a/45846251
     */
    const [fileInputKey, setFileInputKey] = useState(0)
    const fileInputRef = useRef(null)

    // If the dropzone is meant to be a single file input and we already have a file, don't render
    // the dropzone which will always result in rejected files/errors.
    const renderDropzone = maxFiles !== 1 || isEmpty(values)

    const resetState = useCallback(() => {
      setState(UploaderState.Initial)
      setValidationMessage('')
    }, [])

    const handleChange = useCallback(
      fileList => {
        setFileInputKey(prev => prev + 1)

        if (isEmpty(fileList)) {
          safeInvoke(onChange, [])
          return
        }

        const files = [...fileList]
        safeInvoke(onChange, files)

        const { accepted, rejected } = splitFiles(files, {
          maxSizeInBytes,
          acceptedMimeTypes,
          currentFileCount: values?.length,
          maxFiles
        })

        if (!isEmpty(accepted)) {
          safeInvoke(onAccepted, accepted)
        }

        if (!isEmpty(rejected)) {
          safeInvoke(onRejected, rejected)
        }
      },
      [acceptedMimeTypes, maxFiles, maxSizeInBytes, onAccepted, onChange, onRejected, values?.length]
    )

    return (
      <Box ref={ref}>
        <FormField
          label={label}
          description={description}
          hint={hint}
          // Always override the validationMessage from prop if we have a message to display from dragging
          validationMessage={
            !isEmpty(validationMessage) ? <Text color={colors.red500}>{validationMessage}</Text> : validationMessageProp
          }
        >
          {renderDropzone && (
            <Box
              aria-disabled={disabled}
              className={className.toString()}
              height="100%"
              onClick={handleClick}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onKeyDown={handleKeyDown}
              paddingX={majorScale(5)}
              paddingY={majorScale(5)}
              tabIndex={disabled ? undefined : 0}
              width="100%"
            >
              <Box
                accept={arrayToCsv(acceptedMimeTypes)}
                display="none"
                is="input"
                tabIndex={-1}
                key={fileInputKey}
                multiple={maxFiles !== 1}
                onChange={handleInputChange}
                ref={fileInputRef}
                type="file"
              />
              <Box
                alignItems="center"
                backgroundColor={disabled ? colors.gray90 : colors.gray200}
                borderRadius="50%"
                display="flex"
                height={majorScale(7)}
                justifyContent="center"
                pointerEvents="none"
                width={majorScale(7)}
              >
                <UploadIcon color={disabled ? colors.gray400 : colors.gray500} size={majorScale(3)} />
              </Box>
              <Paragraph marginTop={majorScale(3)} pointerEvents="none">
                <Text className={browseCopyClassName}>Browse </Text>
                <Text className={orDragCopyClassName}>{orDragCopy}</Text>
              </Paragraph>
            </Box>
          )}
        </FormField>
      </Box>
    )
  })
)

FileUploader.propTypes = {
  acceptedMimeTypes: PropTypes.array,
  disabled: PropTypes.bool,
  maxFiles: PropTypes.number,
  maxSizeInBytes: PropTypes.number,
  onAccepted: PropTypes.func,
  onChange: PropTypes.func,
  onRejected: PropTypes.func,
  onRemove: PropTypes.func,
  renderFile: PropTypes.func,
  values: PropTypes.array
}

export default FileUploader
