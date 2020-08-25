import React, { memo, forwardRef, useState, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import cx from 'classnames'
import { Button } from '../../buttons'
import { TextInput } from '../../text-input'
import safeInvoke from '../../lib/safe-invoke'

export const CLASS_PREFIX = 'evergreen-file-picker'

const FilePicker = memo(
  forwardRef(function FilePicker(props, ref) {
    const {
      name,
      accept,
      required,
      multiple,
      onBlur,
      disabled,
      capture,
      height,
      onChange,
      placeholder = 'Select a file to upload…',
      className,
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
      if (fileInputRef && fileInputRef.current) {
        fileInputRef.current.click()
      }
    }, [fileInputRef])

    const handleBlur = useCallback(
      e => {
        // Setting e.target.files to an array fails. It must be a FileList
        if (e && e.target)
          e.target.files =
            fileInputRef && fileInputRef.current && fileInputRef.current.files

        safeInvoke(onBlur, e)
      },
      [onBlur]
    )

    let inputValue
    if (files.length === 0) {
      inputValue = ''
    } else if (files.length === 1) {
      inputValue = files[0].name
    } else {
      inputValue = `${files.length} files`
    }

    let buttonText
    if (files.length === 0) {
      buttonText = 'Select file'
    } else if (files.length === 1) {
      buttonText = 'Replace file'
    } else {
      buttonText = 'Replace files'
    }

    const rootClassNames = cx(`${CLASS_PREFIX}-root`, className)

    return (
      <Box
        display="flex"
        className={rootClassNames}
        ref={ref}
        {...rest}
      >
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
          value={inputValue}
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
          height={height}
          flexShrink={0}
          type="button"
          onBlur={handleBlur}
        >
          {buttonText}
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
  accept: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),

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
  className: PropTypes.string
}

export default FilePicker
