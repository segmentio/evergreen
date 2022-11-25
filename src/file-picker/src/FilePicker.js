import React, { memo, forwardRef, useState, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { Button } from '../../buttons'
import safeInvoke from '../../lib/safe-invoke'
import { TextInput } from '../../text-input'

export const CLASS_PREFIX = 'evergreen-file-picker'

const ROOT_CLASS_NAME = `${CLASS_PREFIX}-root`

const getBrowseOrReplaceText = fileCount => {
  const action = fileCount === 0 ? 'Select' : 'Replace'
  const fileLabel = fileCount > 1 ? 'files' : 'file'

  return `${action} ${fileLabel}`
}

const getInputValue = files => {
  if (files.length === 1) {
    return files[0].name
  }

  if (files.length > 1) {
    return `${files.length} files`
  }

  return ''
}

const FilePicker = memo(
  forwardRef(function FilePicker(props, ref) {
    const {
      accept,
      browseOrReplaceText = getBrowseOrReplaceText,
      capture,
      className,
      disabled,
      height = 32,
      inputText = getInputValue,
      multiple,
      name,
      onBlur,
      onChange,
      placeholder = 'Select a file to upload…',
      required,
      ...rest
    } = props

    const [files, setFiles] = useState([])
    const fileInputRef = useRef()

    const handleFileChange = useCallback(
      e => {
        // Firefox returns the same array instance each time for some reason
        const filesCopy = [...e.target.files]

        setFiles(filesCopy)

        safeInvoke(onChange, filesCopy)
      },
      [onChange]
    )

    const handleButtonClick = useCallback(() => {
      if (fileInputRef.current) {
        fileInputRef.current.click()
      }
    }, [])

    const handleBlur = useCallback(
      e => {
        // Setting e.target.files to an array fails. It must be a FileList
        if (e && e.target) {
          e.target.files = fileInputRef.current && fileInputRef.current.files
        }

        safeInvoke(onBlur, e)
      },
      [onBlur]
    )

    const rootClassNames = className ? `${ROOT_CLASS_NAME} ${className}` : ROOT_CLASS_NAME

    return (
      <Box display="flex" className={rootClassNames} ref={ref} {...rest}>
        <Box
          ref={fileInputRef}
          className={`${CLASS_PREFIX}-file-input`}
          is="input"
          type="file"
          name={name}
          accept={accept}
          required={required}
          multiple={multiple}
          disabled={disabled}
          capture={capture}
          onChange={handleFileChange}
          display="none"
        />

        <TextInput
          className={`${CLASS_PREFIX}-text-input`}
          readOnly
          value={inputText(files)}
          placeholder={placeholder}
          // There's a weird specifity issue when there's two differently sized inputs on the page
          borderTopRightRadius="0 !important"
          borderBottomRightRadius="0 !important"
          height={height}
          flex={1}
          textOverflow="ellipsis"
          onBlur={handleBlur}
        />

        <Button
          className={`${CLASS_PREFIX}-button`}
          onClick={handleButtonClick}
          disabled={disabled}
          borderTopLeftRadius={0}
          borderBottomLeftRadius={0}
          marginLeft={-1}
          height={height}
          flexShrink={0}
          type="button"
          onBlur={handleBlur}
        >
          {browseOrReplaceText(files.length)}
        </Button>
      </Box>
    )
  })
)

FilePicker.propTypes = {
  /**
   * Name attribute of the input.
   */
  name: PropTypes.string,

  /**
   * The accept attribute of the input.
   */
  accept: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),

  /**
   * When true, the file picker is required.
   */
  required: PropTypes.bool,

  /**
   * When true, accept multiple files.
   */
  multiple: PropTypes.bool,

  /**
   * When true, the filepicker is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * The capture attribute of the input.
   */
  capture: PropTypes.bool,

  /**
   * The height of the file picker.
   */
  height: PropTypes.number,

  /**
   * Function called when onChange is fired.
   * (files: FileList) => void
   */
  onChange: PropTypes.func,

  /**
   * Function called when onBlur is fired.
   * (event: React.FocusEvent) => void
   */
  onBlur: PropTypes.func,

  /**
   * Placeholder of the text input
   */
  placeholder: PropTypes.string,

  /**
   * Class name passed to the FilePicker.
   * Only use this if you know what you are doing.
   */
  className: PropTypes.string,

  /**
   * Function that returns the call-to-action button text for selecting files.
   * @type {(fileCount: number) => string}
   */
  browseOrReplaceText: PropTypes.func,

  /**
   * Function that returns the text in the input field.
   * @type {(files: File[]) => string}
   */
  inputText: PropTypes.func
}

export default FilePicker
