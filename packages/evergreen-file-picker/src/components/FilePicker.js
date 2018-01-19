import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { Button } from 'evergreen-buttons'
import { TextInput } from 'evergreen-text-input'

export const CLASS_PREFIX = 'evergreen-file-picker'

export default class FilePicker extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    accept: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
    ]),
    required: PropTypes.bool,
    multiple: PropTypes.bool,
    disabled: PropTypes.bool,
    capture: PropTypes.bool,
    height: PropTypes.number,
    onChange: PropTypes.func
  }

  constructor() {
    super()

    this.state = {
      files: []
    }
  }

  render() {
    const {
      name,
      accept,
      required,
      multiple,
      disabled,
      capture,
      height,
      onChange, // Remove onChange from props
      ...props
    } = this.props
    const { files } = this.state

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

    return (
      <Box display="flex" className={`${CLASS_PREFIX}-root`} {...props}>
        <Box
          innerRef={this.fileInputRef}
          className={`${CLASS_PREFIX}-file-input`}
          is="input"
          type="file"
          name={name}
          accept={accept}
          required={required}
          multiple={multiple}
          disabled={disabled}
          capture={capture}
          onChange={this.handleFileChange}
          display="none"
        />

        <TextInput
          className={`${CLASS_PREFIX}-text-input`}
          readOnly
          value={inputValue}
          placeholder="Select a file to upload…"
          // There's a weird specifity issue when there's two differently sized inputs on the page
          borderTopRightRadius="0 !important"
          borderBottomRightRadius="0 !important"
          height={height}
          flex={1}
          textOverflow="ellipsis"
        />

        <Button
          className={`${CLASS_PREFIX}-button`}
          onClick={this.handleButtonClick}
          disabled={disabled}
          borderTopLeftRadius={0}
          borderBottomLeftRadius={0}
          height={height}
          flexShrink={0}
        >
          {buttonText}
        </Button>
      </Box>
    )
  }

  fileInputRef = node => {
    this.fileInput = node
  }

  handleFileChange = e => {
    const { onChange } = this.props
    // Firefox returns the same array instance each time for some reason
    const files = [...e.target.files]

    this.setState({ files })

    if (onChange) {
      onChange(files)
    }
  }

  handleButtonClick = () => {
    this.fileInput.click()
  }
}
