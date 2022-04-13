import React, { memo, forwardRef, useState, useRef, useCallback } from 'react'
import isEmpty from 'lodash.isempty'
import Box, { PolymorphicBoxProps } from 'ui-box'
import { Key, MimeType } from '../../constants'
import { FormField } from '../../form-field'
import { FormFieldOwnProps } from '../../form-field/src/FormField'
import { useStyleConfig } from '../../hooks'
import { UploadIcon } from '../../icons'
import arrayToCsv from '../../lib/array-to-csv'
import isFunction from '../../lib/is-function'
import safeInvoke from '../../lib/safe-invoke'
import { majorScale } from '../../scales'
import { useTheme } from '../../theme'
import { Text, Paragraph } from '../../typography'
import FileCard from './FileCard'
import { FileRejection } from './types/file-rejection'
import getFileDataTransferItems from './utils/get-file-data-transfer-items'
import { getMaxFilesMessage } from './utils/messages'
import splitFiles from './utils/split-files'

export interface FileUploaderOwnProps extends FormFieldOwnProps {
  /**
   * MIME types (not file extensions) to accept
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
   */
  acceptedMimeTypes?: MimeType[]
  /**
   * When true, displays a disabled state where drops don't fire and the native browser picker doesn't open
   */
  disabled?: boolean
  /**
   * Maximum number of files to accept
   */
  maxFiles?: number
  /**
   * Maximum size of an **individual** file to accept
   */
  maxSizeInBytes?: number
  /**
   * Callback for when files are accepted via drop or the native browser picker.
   */
  onAccepted?: (files: File[]) => void
  /**
   * Callback for when files are added via drop or the native browser picker, which includes both
   * the accepted and rejected files.
   */
  onChange?: (files: File[]) => void
  /**
   * Callback for when files are rejected via drop or the native browser picker
   */
  onRejected?: (fileRejections: FileRejection[]) => void
  /**
   * Callback to fire when a file should be removed
   */
  onRemove?: (file: File) => void
  /**
   * Custom render function for displaying the file underneath the uploader
   */
  renderFile?: (file: File, index: number) => React.ReactNode
  /**
   * File values to render underneath the uploader
   */
  values?: File[]
}

export type FileUploaderProps = PolymorphicBoxProps<'div', FileUploaderOwnProps>

const UploaderState = {
  Initial: 'initial',
  Dragging: 'dragging',
  Error: 'error'
}

const disabledPseudoSelector = `&[aria-disabled='true']`
const dragHoverPseudoSelector = `&[data-state='${UploaderState.Dragging}']`
const invalidPseudoSelector = `&[aria-invalid='true']`
const hoverPseudoSelector = `&:hover:not(${disabledPseudoSelector}):not(${dragHoverPseudoSelector}):not(${invalidPseudoSelector})`
const styleModifiers = {}
const pseudoSelectors = {
  _focus: '&:focus',
  _hover: hoverPseudoSelector,
  _hoverBrowseCopy: `${hoverPseudoSelector} span:first-of-type`,
  _hoverOrDragCopy: `${hoverPseudoSelector} span:last-of-type`,
  _dragHover: dragHoverPseudoSelector,
  _disabled: disabledPseudoSelector,
  _invalid: invalidPseudoSelector
}
const internalStyles = {}

const FileUploader: React.FC<FileUploaderProps> = memo(
  forwardRef((props, ref) => {
    const {
      acceptedMimeTypes,
      description,
      disabled = false,
      hint,
      isRequired,
      label,
      labelFor,
      maxFiles,
      maxSizeInBytes,
      onAccepted,
      onChange,
      onRejected,
      onRemove,
      renderFile,
      validationMessage: validationMessageProp,
      values,
      ...rest
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
    const fileInputRef = useRef<HTMLInputElement | null>(null)
    const orDragCopy = `or drag ${maxFiles === 1 ? 'a file' : 'files'} here`

    // If the dropzone is meant to be a single file input and we already have a file, don't render
    // the dropzone which will always result in rejected files/errors.
    const renderDropzone = maxFiles !== 1 || isEmpty(values)

    const resetState = useCallback(() => {
      setState(UploaderState.Initial)
      setValidationMessage('')
    }, [])

    const handleChange = useCallback(
      (fileList: FileList) => {
        setFileInputKey(prev => prev + 1)

        if (isEmpty(fileList)) {
          safeInvoke(onChange, [])
          return
        }

        const files = [...((fileList as any) as File[])]
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
      (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        event.stopPropagation()
        event.dataTransfer.dropEffect = 'copy'

        if (disabled) {
          return
        }

        const dragItems = getFileDataTransferItems(event.dataTransfer.items)
        const { length: draggingCount } = dragItems
        const { length: currentCount } = values ?? []

        if (maxFiles == null || maxFiles < 0) {
          setState(UploaderState.Dragging)
          return
        }

        if (draggingCount > maxFiles || draggingCount + currentCount > maxFiles) {
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
      (event: React.DragEvent<HTMLDivElement>) => {
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
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = event.target
        // Theoretically the input should not be accessible at all when disabled,
        // but this should act as a safeguard
        if (disabled || files == null) {
          return
        }

        handleChange(files)
      },
      [disabled, handleChange]
    )

    const handleKeyDown = useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
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
          labelFor={labelFor}
          description={description}
          hint={hint}
          isRequired={isRequired}
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
              {...rest}
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
                <Text color={disabled ? colors.gray500 : colors.blue400}>Browse </Text>
                <Text color={disabled ? colors.gray500 : colors.gray700}>{orDragCopy}</Text>
              </Paragraph>
            </Box>
          )}
        </FormField>
        <Box marginTop={majorScale(2)}>
          {values?.map((file: File, index: number) =>
            isFunction(renderFile) ? (
              renderFile(file, index)
            ) : (
              <FileCard
                key={`${file.name}-${index}`}
                name={file.name}
                onRemove={isFunction(onRemove) ? () => onRemove(file) : undefined}
                sizeInBytes={file.size}
                type={file.type}
              />
            )
          )}
        </Box>
      </Box>
    )
  })
)

export default FileUploader
