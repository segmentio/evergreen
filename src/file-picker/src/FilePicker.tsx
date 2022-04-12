import React, { memo, forwardRef, useState, useRef, useCallback } from 'react'
import cx from 'classnames'
import Box, { PolymorphicBoxProps } from 'ui-box'
import { Button } from '../../buttons'
import safeInvoke from '../../lib/safe-invoke'
import { TextInput } from '../../text-input'

export interface FilePickerOwnProps {
    /** the name attribute of the input */
    name?: string;
    /** the accept attribute of the input */
    accept?: string | string[];
    /** whether or not the field is required */
    required?: boolean;
    /** whether or not the file input accepts multiple files */
    multiple?: boolean;
    /** whether or not the filepicker is disabled */
    disabled?: boolean;
    /** the capture attribute of the input */
    capture?: boolean;
    /** the height of the filepicker */
    height?: number;
    /** function called when onChange is fired */
    onChange?: (files: FileList) => void;
    /** function called when onBlur is fired */
    onBlur?: (event: React.FocusEvent) => void;
    /** placeholder of the text input */
    placeholder?: string;
}

export type FilePickerProps = PolymorphicBoxProps<'div', FilePickerOwnProps>;

export const CLASS_PREFIX = 'evergreen-file-picker'

const FilePicker: React.FC<FilePickerProps> = memo(
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
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string | string[] | undefined' is not assign... Remove this comment to see the full error message
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

        // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
        // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
        // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
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

export default FilePicker
