import React, { memo, forwardRef, useState, useRef, useCallback } from 'react'
import isEmpty from 'lodash.isempty'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { Key } from '../../constants'
import { FormField } from '../../form-field'
import { useStyleConfig } from '../../hooks'
import { UploadIcon } from '../../icons'
import arrayToCsv from '../../lib/array-to-csv'
import safeInvoke from '../../lib/safe-invoke'
import { majorScale } from '../../scales'
import { useTheme } from '../../theme'
import { Text, Paragraph } from '../../typography'
import getFileDataTransferItems from './utils/get-file-data-transfer-items'
import { getMaxFilesMessage } from './utils/messages'
import splitFiles from './utils/split-files'

const UploaderState = {
  Initial: 'initial',
  Dragging: 'dragging',
  Error: 'error'
}

const disabledPseudoSelector = `&[aria-disabled='true']`
const dragHoverPseudoSelector = `&[data-state='${UploaderState.Dragging}']`
const invalidPseudoSelector = `&[aria-invalid='true']`
const styleModifiers = {}
const pseudoSelectors = {
  _focus: '&:focus',
  _hover: `&:hover:not(${disabledPseudoSelector}):not(${dragHoverPseudoSelector}):not(${invalidPseudoSelector})`,
  _dragHover: dragHoverPseudoSelector,
  _disabled: disabledPseudoSelector,
  _invalid: invalidPseudoSelector
}
const internalStyles = {}

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
    const { className, ...boxProps } = useStyleConfig('FileUploader', styleModifiers, pseudoSelectors, internalStyles)
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

    const browseCopyClassName = ''
    const orDragCopyClassName = ''
    const orDragCopy = `or drag ${maxFiles === 1 ? 'a file' : 'files'} here`

    // If the dropzone is meant to be a single file input and we already have a file, don't render
    // the dropzone which will always result in rejected files/errors.
    const renderDropzone = maxFiles !== 1 || isEmpty(values)

    const resetState = useCallback(() => {
      setState(UploaderState.Initial)
      setValidationMessage('')
    }, [])

    const handleChange = useCallback(
      /**
       * @param {FileList} fileList
       */
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

    const handleClick = useCallback(() => {
      if (disabled) {
        return
      }

      if (fileInputRef.current == null) {
        return
      }

      fileInputRef.current.click()
    }, [disabled])

    const handleDragOver = useCallback(
      /**
       * @param {React.DragEvent<HTMLDivElement>} event
       */
      event => {
        event.preventDefault()
        event.stopPropagation()
        event.dataTransfer.dropEffect = 'copy'

        if (disabled) {
          return
        }

        const dragItems = getFileDataTransferItems(event.dataTransfer.items)
        const { length: draggingCount } = dragItems
        const { length: currentCount } = values ?? []

        if (maxFiles == null) {
          setState(UploaderState.Dragging)
          return
        }

        if (maxFiles > 0 && (draggingCount > maxFiles || draggingCount + currentCount > maxFiles)) {
          setValidationMessage(getMaxFilesMessage(maxFiles))
          setState(UploaderState.Error)
          return
        }

        setState(UploaderState.Dragging)
      },
      [disabled, maxFiles, values]
    )

    const handleDragLeave = useCallback(() => resetState(), [resetState])

    const handleDrop = useCallback(
      /**
       * @param { React.DragEvent<HTMLDivElement>} event
       */
      event => {
        event.preventDefault()
        event.stopPropagation()

        if (disabled) {
          return
        }

        resetState()
        handleChange(event.dataTransfer.files)
      },
      [disabled, handleChange, resetState]
    )

    const handleInputChange = useCallback(
      /**
       * @param {React.ChangeEvent<HTMLInputElement>} event
       */
      event => {
        handleChange(event.target.files)
      },
      [handleChange]
    )

    const handleKeyDown = useCallback(
      /**
       * @param {React.KeyboardEvent<HTMLDivElement>} event
       */
      event => {
        if (event.key !== Key.Enter && event.key !== Key.Space) {
          return
        }

        event.preventDefault()
        handleClick()
      },
      [handleClick]
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
              aria-invalid={state === UploaderState.Error}
              className={className}
              data-state={state}
              onClick={handleClick}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onKeyDown={handleKeyDown}
              tabIndex={disabled ? undefined : 0}
              {...boxProps}
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
