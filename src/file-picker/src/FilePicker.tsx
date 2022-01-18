import React, { memo, forwardRef, useState, useRef, useCallback } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { Button } from '../../buttons'
import safeInvoke from '../../lib/safe-invoke'
import { TextInput } from '../../text-input'

export const CLASS_PREFIX = 'evergreen-file-picker'

const FilePicker = memo(
  forwardRef(function FilePicker(props, ref) {
    const {
      accept,
      capture,
      className,
      disabled,
      height = 32,
      multiple,
      name,
      onBlur,
      onChange,
      placeholder = 'Select a file to upload…',
      required,
      // @ts-expect-error ts-migrate(2700) FIXME: Rest types may only be created from object types.
      ...rest
    } = props

    const [files, setFiles] = useState([])
    const fileInputRef = useRef()

    const handleFileChange = useCallback(
      e => {
        // Firefox returns the same array instance each time for some reason
        const filesCopy = [...e.target.files]

        // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'any[]' is not assignable to para... Remove this comment to see the full error message
        setFiles(filesCopy)

        safeInvoke(onChange, filesCopy)
      },
      [onChange]
    )

    const handleButtonClick = useCallback(() => {
      if (fileInputRef.current) {
        // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
        fileInputRef.current.click()
      }
    }, [])

    const handleBlur = useCallback(
      e => {
        // Setting e.target.files to an array fails. It must be a FileList
        if (e && e.target) {
          // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
          e.target.files = fileInputRef.current && fileInputRef.current.files
        }

        safeInvoke(onBlur, e)
      },
      [onBlur]
    )

    let inputValue
    if (files.length === 0) {
      inputValue = ''
    } else if (files.length === 1) {
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'name' does not exist on type 'never'.
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
      <Box display="flex" className={rootClassNames} ref={ref} {...rest}>
        <Box
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'MutableRefObject<undefined>' is not assignab... Remove this comment to see the full error message
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
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          className={`${CLASS_PREFIX}-text-input`}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean' is not assignable to type 'never'.
          readOnly
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
          value={inputValue}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          placeholder={placeholder}
          // There's a weird specifity issue when there's two differently sized inputs on the page
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          borderTopRightRadius="0 !important"
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          borderBottomRightRadius="0 !important"
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
          height={height}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
          flex={1}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          textOverflow="ellipsis"
          // @ts-expect-error ts-migrate(2322) FIXME: Type '(e: any) => void' is not assignable to type ... Remove this comment to see the full error message
          onBlur={handleBlur}
        />

        // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
        <Button
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          className={`${CLASS_PREFIX}-button`}
          // @ts-expect-error ts-migrate(2322) FIXME: Type '() => void' is not assignable to type 'never... Remove this comment to see the full error message
          onClick={handleButtonClick}
          disabled={disabled}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
          borderTopLeftRadius={0}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
          borderBottomLeftRadius={0}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
          height={height}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
          flexShrink={0}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          type="button"
          // @ts-expect-error ts-migrate(2322) FIXME: Type '(e: any) => void' is not assignable to type ... Remove this comment to see the full error message
          onBlur={handleBlur}
        >
          {buttonText}
        </Button>
      </Box>
    )
  })
)

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
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
  className: PropTypes.string
}

export default FilePicker
